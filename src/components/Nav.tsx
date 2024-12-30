import type { NavBarProps } from "@/lib/types";
import { useEffect, useState } from "react";

const Nav = ({
  isClicked,
  scrolling,
  navigation,
  toggleNavClick,
}: NavBarProps) => {
  const [activeLink, setActiveLink] = useState("home");

  // Effect to handle scrolling and update active link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section[id]");

      sections.forEach((section) => {
        if (section instanceof HTMLElement) {
          const sectionTop = section.offsetTop - 70;
          const sectionHeight = section.offsetHeight;
          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveLink(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScrollTo = (targetId: string) => {
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
      });
    }

    setActiveLink(targetId);
  };

  return (
    <>
      {/* Mobile Nav */}
      <nav
        className={`${
          isClicked ? "translate-x-0" : "-translate-x-[190.25rem]"
        } fixed left-0 top-0 flex h-screen w-full items-center justify-start transition-all duration-500 lg:hidden`}
      >
        <ul className="h-full w-[50%] border-r border-muted bg-background pl-4 pt-[9rem]">
          {navigation?.map((item) => (
            <li key={item.title} className="mb-4 text-300 font-500 capitalize">
              <a
                className={`transition-colors duration-300 hover:text-primary ${
                  activeLink === item.title ? "text-primary" : ""
                }`}
                href={item.url}
                onClick={() => {
                  toggleNavClick();
                  smoothScrollTo(item.title);
                }}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Nav */}
      <nav className="hidden md:inline-flex">
        <ul className="flex gap-10 capitalize">
          {navigation?.map((item) => (
            <li key={item.title} className="inline-block text-[1rem] font-500">
              <a
                className={`relative transition-colors duration-300 after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-[20px] after:rounded-xl after:transition-all after:duration-300 after:ease-in hover:text-primary hover:after:w-full hover:after:bg-primary ${
                  activeLink === item.title
                    ? "relative text-primary after:absolute after:bottom-[-0.2rem] after:left-0 after:h-[3px] after:w-full after:rounded-xl after:bg-primary after:transition-all after:duration-500 after:ease-in"
                    : scrolling
                      ? "text-foreground"
                      : "text-white dark:text-white dark:hover:text-primary"
                }`}
                href={item.url}
                onClick={() => smoothScrollTo(item.title)}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav;
