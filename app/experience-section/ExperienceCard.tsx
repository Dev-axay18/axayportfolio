import { experienceProps } from "./experienceDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import slash from "../../public/review-slash.svg";
import { motion } from "framer-motion";

const ExperienceCard = ({
  title,
  company,
  duration,
  location,
  description,
  technologies,
  image,
  link,
  index,
}: experienceProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          delay: 0.1 * index,
          ease: [0.44, 0, 0.22, 0.99],
        },
      }}
      viewport={{
        amount: "some",
        once: true,
      }}
      className="relative flex min-h-[393px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] sm:min-h-[450px] sm:items-center sm:justify-start lg:min-h-[393px] lg:max-w-[438px] "
    >
      <Image
        src={slash}
        alt={"title"}
        className="absolute top-[34px] left-[28px] w-[51px]"
      />

      <div className="mt-10 flex flex-col gap-4">
        <h3 className="text-[20px] font-bold leading-relaxed tracking-wide text-[#e4ded7]">
          {title}
        </h3>
        <p className="text-[16px] font-[500] leading-relaxed tracking-wide text-[#95979D]">
          {company}
        </p>
        <p className="text-[14px] font-[400] leading-relaxed tracking-wide text-[#95979D]">
          {duration} • {location}
        </p>
        <p className="text-[14px] font-[400] leading-relaxed tracking-wide text-[#e4ded7]">
          {description}
        </p>
        {technologies && (
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, idx) => (
              <span
                key={idx}
                className="text-[12px] font-[400] px-2 py-1 rounded-full bg-[#212531] text-[#95979D]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-3 sm:absolute sm:bottom-[28px] sm:left-[28px]">
        {image && (
          <Image
            src={image}
            alt={company}
            width={1600}
            height={840}
            className="h-[41px] w-[41px] rounded-full bg-contain bg-center object-cover"
          />
        )}
        <div className="flex flex-col gap-1 pr-7">
          {link && (
            <Link
              href={link}
              target="_blank"
              className="flex items-center gap-2 text-[14px] font-[500] leading-[16px] text-[#e4ded7] hover:text-[#95979D] transition-colors"
            >
              View Company
              <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceCard; 