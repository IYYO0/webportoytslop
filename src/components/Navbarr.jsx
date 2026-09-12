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
    <div className="navbar flex justify-between mt-7 sm:px-4 rounded-2xl items-center sm:border sm:border-white/20 sm:bg-white/10 sm:backdrop-blur-md">
      <div className="logo">
        <h1 className="text-[#a40606] text-3xl font-bold p-1">Portofolio</h1>
      </div>
      <ul
        className={`menu flex lg:gap-10 md:gap-6 gap-4 md:opacity-100 fixed left-1/2 -translate-x-1/2 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl md:bg-transparent md:backdrop-blur-none md:border-none md:static transition-all  md:transition-none md:translate-x-0 p-4 z-50  ${active ? "top-2 opacity-100" : "-top-10 opacity-0"}`}
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
