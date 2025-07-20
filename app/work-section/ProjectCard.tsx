import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { ProjectProps } from "./projectDetails";
import Link from "next/link";
import Image from "next/image";
import AnimatedTitle from "../animations/AnimatedTitle";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const ProjectCard = ({
  id,
  name,
  description,
  technologies,
  github,
  demo,
  image,
  available,
}: ProjectProps) => {
  return (
    <motion.div
      style={{
        backgroundColor: "#212531",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        position: "relative",
      } as React.CSSProperties}
      className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between overflow-hidden rounded-3xl bg-center py-0 min-h-[400px] lg:min-h-[400px] shadow-2xl shadow-[#0E1016]/60 hover:shadow-3xl hover:shadow-[#e4ded7]/20 transition-shadow duration-300"
      initial="initial"
      animate="animate"
    >
      {/* Image on left/right depending on id parity */}
      <div className={`w-full lg:w-1/2 flex flex-col items-center justify-center ${id % 2 === 0 ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}`}>
        {typeof image === 'string' ? (
          <div className="w-[97%] max-w-[608px] aspect-[16/9] my-8 rounded-2xl shadow-2xl shadow-[#0E1016]/70 hover:shadow-3xl hover:shadow-[#e4ded7]/30 transition-shadow duration-300 overflow-hidden flex items-center justify-center">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ) : (
          <div className="w-[97%] max-w-[608px] aspect-[16/9] my-8 rounded-2xl shadow-2xl shadow-[#0E1016]/70 hover:shadow-3xl hover:shadow-[#e4ded7]/30 transition-shadow duration-300 overflow-hidden flex items-center justify-center">
            <Image
              src={image}
              alt={name}
              className="w-full h-full object-cover"
              priority
              fill={false}
            />
          </div>
        )}
      </div>
      {/* Text content */}
      <div className={`w-full lg:w-1/2 flex flex-col items-start justify-center px-6 py-8 ${id % 2 === 0 ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}`}>
        <div className="relative z-20 rounded-2xl bg-[#181A20]/80 backdrop-blur-md p-6 max-w-[99vw] md:max-w-[650px] lg:max-w-[700px] shadow-lg flex flex-col justify-between h-full">
          <AnimatedTitle
            text={name}
            className={
              "max-w-[99%] text-[40px] leading-none text-white md:text-[44px] md:leading-none lg:max-w-[650px] lg:text-[48px] lg:leading-none"
            }
            wordSpace={"mr-[0.25em]"}
            charSpace={"-mr-[0.01em]"}
          />
          <AnimatedBody
            text={description}
            className={
              "mt-4 w-full max-w-[600px] text-[18px] font-semibold text-[#95979D] min-h-[80px]"
            }
          />
          <div className="mt-9 flex flex-wrap gap-4">
            {technologies.map((tech, id) => (
              <AnimatedTitle
                text={tech}
                wordSpace={"mr-[0.25em]"}
                charSpace={"mr-[0.01em]"}
                key={id}
                className={
                  "text-[14px] font-bold uppercase md:text-[16px] lg:text-[18px] "
                }
              />
            ))}
          </div>
          {/* Action buttons inside the text card, at the bottom */}
          <div className="mt-8 flex items-center gap-4">
            {available ? (
              <>
                <Link
                  href={github}
                  target="_blank"
                  className="rounded-full"
                  aria-label="Open GitHub Repository"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="w-[28px] h-[28px] rounded-full bg-white p-3 text-[24px] text-[#181A20] hover:bg-[#e4ded7] hover:text-[#0E1016] transition-colors duration-200"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
                <Link href={demo} target="_blank" aria-label="Open Live Demo">
                  <FontAwesomeIcon
                    icon={faLink}
                    className="w-[28px] h-[28px] rounded-full bg-white p-3 text-[24px] text-[#181A20] hover:bg-[#e4ded7] hover:text-[#0E1016] transition-colors duration-200"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
              </>
            ) : (
              <div className=" flex items-center justify-center gap-4">
                <Link
                  href={github}
                  target="_blank"
                  className="mt-1 rounded-full"
                  aria-label="Open GitHub Repository"
                >
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="w-[28px] h-[28px] rounded-full bg-white p-3 text-[24px] text-[#181A20] hover:bg-[#e4ded7] hover:text-[#0E1016] transition-colors duration-200"
                    data-blobity
                    data-blobity-radius="38"
                    data-blobity-offset-x="4"
                    data-blobity-offset-y="4"
                    data-blobity-magnetic="true"
                  />
                </Link>
                <div className=" rounded-xl bg-white px-4 py-2 md:px-5 md:py-3 lg:px-6 lg:py-4">
                  <h3 className="text-[16px] md:text-[18px] lg:text-[20px] ">
                    Coming soon
                  </h3>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
