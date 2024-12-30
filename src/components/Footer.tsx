import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const Footer = () => {
  const [showScrollArrow, setShowScrollArrow] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 2000) {
        setShowScrollArrow(true);
      } else {
        setShowScrollArrow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <footer className="mt-[7rem] overflow-hidden border-t-[1.5px] border-border py-8 text-center md:text-left">
      <div className="container">
        <div className="md:flex md:items-center md:justify-between">
          <p className="mb-2">
            Copyright &copy; Alex Rivera {new Date().getFullYear()}. All rights
            reserved.
          </p>

          <div className="links">
            <a
              className="transition-colors duration-300 hover:text-primary"
              href="/"
            >
              Privacy Policy
            </a>
            {" | "}
            <a
              className="transition-colors duration-300 hover:text-primary"
              href="/"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>

      <div onClick={handleScrollToTop}>
        <span
          className={
            showScrollArrow
              ? "visible fixed bottom-4 right-4 z-[100] flex size-[40px] cursor-pointer items-center justify-center rounded-full bg-foreground/50 text-center leading-[0] text-primary-foreground opacity-70 transition-all duration-300 animate-in hover:bg-primary hover:opacity-100"
              : ""
          }
        >
          <ArrowUp />
        </span>
      </div>
    </footer>
  );
};

export default Footer;
