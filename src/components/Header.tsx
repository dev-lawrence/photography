import { useEffect, useState } from "react";
import type { HeaderData } from "@/lib/types";
import Nav from "@/components/Nav";
import { ModeToggle } from "@/components/ModeToggle";

interface HeaderProps {
  header: HeaderData[];
}

const HeaderOne = ({ header }: HeaderProps) => {
  const [isClicked, setIsClicked] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleNavClick = () => {
    setIsClicked(!isClicked);
  };

  // Change header background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;

      if (scroll > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`${scrolling ? "bg-background shadow-xl duration-500 animate-in" : "duration-500 animate-out"} fixed top-0 z-[500] w-full text-foreground`}
    >
      <div className="container flex items-center justify-between py-5">
        {/* Logo */}
        <div className="z-10 text-400 font-900">
          {header[0].logo.logoType === "text" ? (
            <a
              className={`${scrolling ? "text-foreground" : "text-white dark:text-white"}`}
              href="/"
            >
              {header[0].logo.text}
            </a>
          ) : (
            <a href="/">
              <img src={header[0].logo.image?.asset.url} alt="Logo" />
            </a>
          )}
        </div>

        {/* Navbar */}
        <Nav
          scrolling={scrolling}
          navigation={header[0].navigation}
          isClicked={isClicked}
          toggleNavClick={toggleNavClick}
        />

        <div className="z-10 flex items-center gap-4">
          <ModeToggle />

    

          {/* Menu buttons */}
          <div
            className={`${scrolling ? "text-foreground" : "text-white dark:text-white"} ml-4 inline-block md:hidden`}
            onClick={toggleNavClick}
          >
            {isClicked ? (
              <button className="text-500">
                <i className="fa-solid fa-close"></i>
              </button>
            ) : (
              <button className="text-500">
                <i className="fa-solid fa-bars"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeaderOne;
