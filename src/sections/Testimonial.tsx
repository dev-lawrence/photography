import type { TestimonialProps } from "@/lib/types";
import Title from "../components/Title";
import { getTestimonialContent } from "@/lib/queries";

const testimonialSection = await getTestimonialContent();

const TestimonialCard = ({
  name,
  description,
  imageType,
  image,
  url,
  profession,
}: TestimonialProps) => {
  return (
    <div
      className={`card-shadow dark:border-neutral-90 relative flex h-auto max-w-[22rem] select-none flex-col items-start justify-center overflow-hidden rounded-2xl border border-muted-foreground p-5 shadow-sm transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-sm dark:hover:shadow-white/10`}
    >
      <div className="absolute right-0 top-0 h-24 w-24 rounded-2xl bg-gradient-to-r from-[#EA580C] to-[#EA580C] opacity-20 blur-3xl"></div>
      <div className="mb-0 flex h-fit flex-row items-center gap-3">
        {imageType === "upload" ? (
          <img
            className="m-0 block h-11 w-11 rounded-full object-cover"
            src={image?.asset.url}
            alt={image?.alt}
          />
        ) : (
          <img
            className="m-0 block h-11 w-11 rounded-full object-cover"
            src={url}
            alt={image?.alt}
          />
        )}
        <div className="mb-0 flex h-fit flex-col items-start">
          <h3 className="text-base font-medium m-0 text-gray-900 dark:text-gray-100">
            {name}
          </h3>
          <p className="font-regular text-sm m-0 text-center text-gray-600 dark:text-gray-400">
            {profession}
          </p>
        </div>
      </div>
      <p className="text-sm font-light md:text-base mb-0 mt-3 text-left text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <div className="pt-section container">
      <Title
        title={testimonialSection.sectionTitle}
        subtitle={testimonialSection.sectionSubtitle}
        isCenter={true}
      />
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-5 md:flex-row">
        {[0, 1, 2].map((colIndex) => (
          <div key={colIndex} className="flex flex-col justify-center gap-4">
            {testimonialSection.testimonials
              .slice(colIndex * 2, colIndex * 2 + 2)
              .map((testimonial) => (
                <TestimonialCard key={testimonial.name} {...testimonial} />
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
