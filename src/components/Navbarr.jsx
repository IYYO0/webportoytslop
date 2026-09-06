import { useState, useEffect } from "react";

const Navbarr = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar flex justify-between py-7 items-center">
      <div className="logo">
        <h1 className="text-[#a40606] text-3xl font-bold p-1">Portofolio</h1>
      </div>
      <ul
        className={`menu flex md:gap-10 gap-4 md:opacity-100 fixed left-1/2 -translate-x-1/2 bg-white/30 backdrop-blur-sm rounded-2xl md:bg-transparent md:static transition-all  md:transition-none md:translate-x-0 p-4 z-50  ${active ? "top-2 opacity-100" : "-top-10 opacity-0"}`}
      >
        <a
          href="#home"
          className="font-medium text-base sm:text-lg hover:text-zinc-400 transition-colors duration-300 ease-in-out"
        >
          Home
        </a>
        <a
          href="#about"
          className="font-medium text-base sm:text-lg hover:text-zinc-400 transition-colors duration-300 ease-in-out"
        >
          About
        </a>
        <a
          href="#project"
          className="font-medium text-base sm:text-lg hover:text-zinc-400 transition-colors duration-300 ease-in-out"
        >
          Project
        </a>
        <a
          href="#contact"
          className="font-medium text-base sm:text-lg hover:text-zinc-400 transition-colors duration-300 ease-in-out"
        >
          Contact
        </a>
      </ul>
    </div>
  );
};

export default Navbarr;
