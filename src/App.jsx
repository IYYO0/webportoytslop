import dataImage from "./data";
import { listTools, listProject } from "./data";
import BlurText from "@/components/BlurText";
import ShinyText from "@/components/ShinyText";
import GlareHover from "@/components/GlareHover";
import ScrollVelocity from "@/components/ScrollVelocity";
import CountUp from "@/components/CountUp";
import StarBorder from "@/components/StarBorder";

function App() {
  return (
    <>
      <div className="hero grid md:grid-cols-2 py-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={dataImage.HeroImage2}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>The code I typed came out of boredom.🥀</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 ">
            <ShinyText
              text="Yo, I'm Muhammad Dario Eshan"
              speed={2}
              delay={0}
              color="#b5b5b5"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
            />
          </h1>
          <div className="text-base/loose mb-6 opacity-50">
            <BlurText
              text=" I have an interest in the fields of Programming and Design, particularly in Website development and Design such as Posters, Pamphlets, and Banners. This interest in these fields has been ongoing for more than 2 years across all areas."
              delay={65}
              animateBy="words"
              direction="top"
            />
          </div>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="" className=" rounded-2xl bg-[#a40606] py-4 px-4">
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <StarBorder
              as="a"
              href="#project"
              color="white"
              speed="5s"
              thickness={1}
              className="py-4 px-4 md:py-4 md:px-6"
              backgroundColor="#27272a"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </StarBorder>
          </div>
        </div>
        <div className="hero-image  md:ml-auto  rounded-2xl animate__animated animate__fadeInUp animate__delay-4s">
          <GlareHover
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={1200}
            playOnce={false}
            className=""
          >
            <img
              src={dataImage.HeroImage2}
              alt="Hero Image"
              className="rounded-2xl w-125"
              loading="lazy"
            />
          </GlareHover>
        </div>
      </div>

      <div className="sm:mt-32 mt-8 overflow-hidden w-screen relative left-1/2 right-1/2 -mx-[50.5vw]">
        <ScrollVelocity
          texts={["Scroll to Explore", "See My Work"]}
          velocity={100}
          className="custom-scroll-text"
          numCopies={6}
          damping={50}
          stiffness={400}
        />
      </div>

      {/* About */}
      <div className="about mt-24 py-10" id="about">
        <div
          className="relative xl:w-2/3 lg:3/4 w-full mx-auto p-7 md:pt-14  bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="hidden md:block absolute top-5 left-5">
            <div className="flex gap-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-green-500"></span>
            </div>
          </div>
          <img
            src={dataImage.HeroImage2}
            alt="image"
            className="w-12 rounded-md sm:hidden mb-10"
            loading="lazy"
          />
          <p className="text-base/loose mb-10">
            Hi, let me introduce myself, I'm Muhammad Dario Eshan, a Full Stack
            Web Developer and Designer for both UI/UX Design and Digital
            Products. I believe that design and functionality should go hand in
            hand, so every project I develop not only looks appealing but also
            provides an optimal user experience.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={dataImage.HeroImage2}
              alt="image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  <CountUp
                    from={0}
                    to={20}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    delay={0}
                  />
                  <span className="text-[#a40606]">+</span>
                </h1>
                <p>Project Finished</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">
                  <CountUp
                    from={0}
                    to={3}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                    delay={0}
                  />
                  <span className="text-[#a40606]">+</span>
                </h1>
                <p>Years of Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tools mt-32">
        <h1
          className="text-4xl/snug font-bold mb-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Tools That I Use
        </h1>
        <p
          className="xl:w-2/5 lg:2/4 md:2/3 sm:3/4 w-full text-base/loose opacity-50"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-once="true"
        >
          The following are the tools I commonly use for website development and
          design
        </p>
        <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listTools.map((tool) => (
            <div
              className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
              key={tool.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={tool.dad}
              data-aos-once="true"
            >
              <img
                src={tool.gambar}
                alt="Tools Image"
                className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                loading="lazy"
              />
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* About */}

      {/* Project */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Projects
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Here are some projects I've made.
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProject.map((project) => (
            <div
              className="p-4 bg-zinc-800 rounded-md flex flex-col"
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={project.dad}
              data-aos-once="true"
            >
              <img src={project.gambar} alt="project image" loading="lazy" />
              <div className="flex flex-col flex-1">
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose opacity-50 mb-4">
                  {project.desk}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tools.map((tool, index) => (
                    <p
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                      key={index}
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="text-center mt-auto">
                  <a
                    href="#"
                    className=" bg-[#a40606] p-3 rounded-lg block border border-zinc-600 hover:bg-[#ab1e1e] mt-auto"
                  >
                    View Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project */}

      {/* Contact */}
      <div className="contact mt-32 sm:p-10 p-0" id="contact">
        <h1
          className="text-4xl font-bold text-center mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Contact
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          let's connect with me.
        </p>
        <form
          action="https://formsubmit.co/ciphertraderr@gmail.com"
          method="POST"
          className="bg-zinc-800 p-10 mt-7 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 box-border">
              <label className="font-semibold">Full Name</label>
              <input
                type="text"
                name="nama"
                className="border border-solid border-zinc-500 p-2 rounded-md"
                placeholder="Enter Full Name.."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input
                type="email"
                name="email"
                className="border border-solid border-zinc-500 p-2 rounded-md"
                placeholder="Enter Email..."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="border border-solid border-zinc-500 p-2 rounded-md"
                placeholder="Enter Message..."
                id="message"
                cols="45"
                rows="7"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" bg-[#a40606] p-3 rounded-lg w-full border border-zinc-600 hover:bg-[#ab1e1e] cursor-pointer"
              >
                Submit Message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact */}
    </>
  );
}

export default App;
