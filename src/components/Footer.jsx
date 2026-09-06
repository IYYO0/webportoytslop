const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-4 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold text-[#a40606]">Portofolio</h1>
      <div className="flex gap-7">
        <a
          href="#home"
          className="hover:text-zinc-400 transition-colors duration-300 ease-in-out"
        >
          Home
        </a>
        <a
          href="#about"
          className="hover:text-zinc-400 transition-colors duration-300 ease-in-out"
        >
          About
        </a>
        <a
          href="#project"
          className="hover:text-zinc-400 transition-colors duration-300 ease-in-out"
        >
          Project
        </a>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://github.com/IYYO0" target="_blank">
          <i className="ri-github-fill ri-2x hover:text-[#a40606]  transition-colors duration-300 ease-in-out"></i>
        </a>
        <a href="https://instagram.com/yamitorizz/" target="_blank">
          <i className="ri-instagram-fill ri-2x hover:text-[#a40606]  transition-colors duration-300 ease-in-out"></i>
        </a>
        <a href="#">
          <i className="ri-discord-fill ri-2x hover:text-[#a40606]  transition-colors duration-300 ease-in-out"></i>
        </a>
        <a href="#">
          <i className="ri-facebook-fill ri-2x hover:text-[#a40606]  transition-colors duration-300 ease-in-out"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
