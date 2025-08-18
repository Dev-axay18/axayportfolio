import SongCarousel from "./SongCarousel";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
  return (
    <section
      className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
      id="about"
    >
      <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
        <h1
          className="mb-10 text-left text-[40px] font-bold leading-tight tracking-tight whitespace-normal text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
        >
          Crafting Elegant, Scalable Solutions for the Modern Web
        </h1>

        <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="mb-10 flex w-[100%] flex-col gap-4 text-[18px] font-medium  leading-relaxed tracking-wide text-[#e4ded7] md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:mb-16  lg:max-w-[90%] lg:text-[24px] ">
            <AnimatedBody
              text="I’m a passionate Full Stack Developer with a strong drive for crafting elegant, scalable solutions to complex real-world problems. With over 5 years of hands-on experience in modern web development, I specialize in building responsive, user-friendly, and performance-optimized applications that provide exceptional user experiences across all platforms."
            />
            <AnimatedBody
              text="From designing sleek front-end interfaces with React, Tailwind-CSS, and modern JavaScript frameworks, to engineering robust backend architectures using Node.js, Express, Django, and RESTful APIs, I take pride in delivering clean, maintainable code that performs efficiently at scale."
            />
            <AnimatedBody
              text="My toolkit includes version control and collaboration through Git and GitHub, database expertise in SQL, PostgreSQL, and MongoDB, and deployment know-how with Docker, Linux-based environments, CI/CD pipelines, and cloud platforms like Vercel and Render. I’m comfortable working in terminal-driven systems, setting up development and production environments, and managing infrastructure that supports high-availability applications."
            />
            <AnimatedBody
              text="Beyond development, I’m an active contributor to open-source projects, a frequent writer of technical blog posts, and an advocate for continuous learning. Whether it’s experimenting with the latest JavaScript features, optimizing database queries, or setting up containerized services, I’m always exploring new ways to elevate the quality and impact of my work."
            />
            <AnimatedBody
              text="When I'm not coding, you'll find me deep-diving into the internals of Linux, experimenting with new tools in the devops ecosystem, or refining my understanding of system architecture and scalability."
            />
          </div>

          <div className="mb-24 flex w-[100%] flex-col gap-4 text-[18px] font-normal leading-relaxed tracking-wide text-[#e4ded7]/80 sm:mb-32 md:mb-40 md:gap-6 md:text-[16px] md:leading-normal lg:mt-0 lg:mb-16 lg:max-w-[30%] lg:text-[18px]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimatedTitle
                text={"Frontend Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "JavaScript (ES6+), React, Next.js, TypeScript, Prismic CMS, Redux, Redux Toolkit, React Testing Library, Vitetest, HTML5, Git/GitHub, NextAuth, Formik."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"UI Libraries"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "CSS3/SCSS/SASS, Tailwind CSS, Material UI, Framer Motion, GSAP, Bootstrap, Chart.js."
                }
              />
            </div>
            <div className="flex flex-col gap-3">
              <AnimatedTitle
                text={"Design Tools"}
                className={
                  "text-[24px] text-[#e4ded7] md:text-[30px] lg:text-[20px]"
                }
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
              />
              <AnimatedBody
                text={
                  "Figma, Framer, FigJam, Adobe XD, ProtoPie, Adobe Photoshop, UX Research, UI Design, Prototyping."
                }
              />
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-col md:-mt-0 lg:mt-28">
          <SongCarousel />
          <AnimatedBody
            text="A few songs I can recommend if you're looking for some fresh tunes :)"
            className="absolute bottom-10 right-0 left-0 mx-auto w-[90%] text-center text-[14px] font-semibold uppercase text-[#e4ded7] sm:w-[500px] md:bottom-12 md:w-[550px] md:text-[16px] "
          />
        </div>
      </div>
    </section>
  );
};

export default About;
