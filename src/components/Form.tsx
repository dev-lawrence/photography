

import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Button } from "./ui/button";
import type { ContactProps } from "@/lib/types";
import { Spinner } from "./Spinner";

const Form = () => {
  const [formData, setFormData] = useState<ContactProps>({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await fetch("/api/submit-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setMessage({
        type: "success",
        text: "✅ Your message has been sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.log(error);
      setMessage({
        type: "error",
        text: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (message.type == "success" || message.type == "error") {
      const timeout = setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 3000);

      return () => clearTimeout(timeout);
    }
  }, [message.type == "success", message.type == "error"]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="mb-2 inline-block font-600 capitalize"
            htmlFor="name"
          >
            name
          </label>
          <br />
          <input
            className="h-[45px] w-full rounded-sm bg-input pl-4"
            name="name"
            id="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 inline-block font-600 capitalize"
            htmlFor="email"
          >
            email
          </label>
          <br />
          <input
            className="h-[45px] w-full rounded-sm bg-input pl-4"
            name="email"
            id="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="mb-2 inline-block font-600 capitalize"
            htmlFor="message"
          >
            message
          </label>
          <br />
          <textarea
            className="w-full rounded-sm bg-input pl-4 pt-4"
            name="message"
            id="message"
            cols={30}
            rows={10}
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <Button type="submit" className="py-6 font-600" disabled={isLoading}>
          {isLoading ? <Spinner /> : "Send Message"}
        </Button>
      </form>

      {message.type == "success" && (
        <p className="mx-auto mt-4 max-w-[500px] rounded-lg bg-[green] p-3 text-center font-600 text-white">
          {message.text}
        </p>
      )}

      {message.type == "error" && (
        <p className="mx-auto mt-4 max-w-[500px] rounded-lg bg-[red] p-3 text-center font-600 text-white">
          {message.text}
        </p>
      )}
    </div>
  );
};

export default Form;
