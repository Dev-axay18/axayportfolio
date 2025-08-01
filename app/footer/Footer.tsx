import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedBody from "../animations/AnimatedBody";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <motion.section
      className=" h-[15vh] w-full  items-center justify-center border-t-[3px] border-[#e4ded7]/30 bg-[#0E1016] pt-10  font-bold uppercase md:h-[20vh] md:py-16 lg:h-[10vh] lg:pt-6 lg:pb-0"
      initial="initial"
      animate="animate"
    >
      <motion.div className="mx-auto flex w-[90%] flex-row items-center justify-between text-center text-[12px] text-[#e4ded7] sm:text-[12px] md:text-[14px] lg:max-w-[1440px] lg:text-[14px]">
        <AnimatedBody text={`Copyright ${year}`} className={"m-0 p-0"} />
        <div className="flex flex-col sm:flex-row  sm:gap-1 md:gap-2">
          <AnimatedBody
            text={"Design & Development by"}
            className={"m-0 p-0"}
          />
          <Link
            href="https://github.com/Dev-axay18"
            target="_blank"
            aria-label="Akshay's GitHub Profile"
          >
            <span className="underline underline-offset-2 hover:no-underline">
              <AnimatedBody text={"Akshay Kale"} className={"m-0 p-0"} />
            </span>{" "}
          </Link>
          <Link
            href="https://www.instagram.com/md5.axay"
            target="_blank"
            aria-label="Akshay's Instagram Profile"
            className="ml-2 flex items-center"
          >
            <FontAwesomeIcon icon={faInstagram} className="text-pink-500 text-[18px] hover:text-pink-400 transition-colors duration-200" />
          </Link>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
