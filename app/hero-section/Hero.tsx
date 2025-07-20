import Link from "next/link";
import Image from "next/image";
import { monaSans } from "../fonts/monaSans";
import { motion } from "framer-motion";
import { imageAnimation, bodyAnimation } from "../animations/animations";
import AnimatedWords from "../animations/AnimatedWords";
import profile from "../../public/profile.webp";
import FloatingBadges from "./FloatingBadges";
import React, { useRef, useEffect, useState } from "react";

const Hero = () => {
  // Refs for name and image
  const nameRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [obstacles, setObstacles] = useState<{ left: number; top: number; width: number; height: number }[]>([]);

  // Measure bounding boxes and set obstacles
  useEffect(() => {
    function updateObstacles() {
      const nameBox = nameRef.current?.getBoundingClientRect();
      const imageBox = imageRef.current?.getBoundingClientRect();
      const containerBox = document.getElementById("home")?.getBoundingClientRect();
      if (nameBox && imageBox && containerBox) {
        setObstacles([
          {
            left: nameBox.left - containerBox.left,
            top: nameBox.top - containerBox.top,
            width: nameBox.width,
            height: nameBox.height,
          },
          {
            left: imageBox.left - containerBox.left,
            top: imageBox.top - containerBox.top,
            width: imageBox.width,
            height: imageBox.height,
          },
        ]);
      }
    }
    updateObstacles();
    window.addEventListener("resize", updateObstacles);
    return () => window.removeEventListener("resize", updateObstacles);
  }, []);

  return (
    <motion.section
      className="relative z-10 flex h-[85vh] w-full items-stretch justify-center bg-[url('.//../public/hero.jpg')] bg-cover  bg-center py-0 sm:h-[90vh]  md:h-[100vh] 3xl:h-[85vh]"
      id="home"
      initial="initial"
      animate="animate"
    >
      <FloatingBadges obstacles={obstacles} />
      <motion.div className="absolute left-0 top-0 right-0 bottom-0 h-full w-full bg-[#0E1016] mix-blend-color"></motion.div>

      <div className="absolute top-10 flex justify-between sm:w-[90%] lg:max-w-[1440px]">
        <div>
          <Link
            href="https://cal.com/akshay-kale"
            target="_blank"
            aria-label="BOOK A CALL"
          >
            <motion.button
              className="hidden rounded-md border-2 border-[#e4ded7] py-2 px-4 text-[14px] font-semibold text-[#e4ded7] sm:block  md:text-[16px] lg:block"
              variants={bodyAnimation}
            >
              BOOK A CALL
            </motion.button>
          </Link>
        </div>

        <div className="flex gap-10 text-[#e4ded7] sm:gap-12 md:gap-14 lg:gap-14">
          <Link
            href="https://github.com/Dev-axay18"
            target="_blank"
            aria-label="View GitHub Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              GH
            </motion.p>
          </Link>
          <Link
            href="https://www.linkedin.com/in/akshay-kale-88792932a"
            target="_blank"
            aria-label="View LinkedIn Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              LN
            </motion.p>
          </Link>
          {/* Removed Twitter Link */}
          <Link
            href="https://www.instagram.com/md5.axay"
            target="_blank"
            aria-label="View Instagram Profile"
          >
            <motion.p
              className="text-[16px] font-bold text-[#e4ded7] md:text-[16px]"
              variants={bodyAnimation}
            >
              IG
            </motion.p>
          </Link>
        </div>
      </div>

      <div className="-mt-36 flex flex-col items-center justify-center sm:-mt-20 lg:my-40 lg:-mt-2 lg:py-40 ">
        <div
          ref={nameRef}
          className={`relative flex flex-col items-center justify-center ${monaSans.className}`}
        >
          <AnimatedWords
            title="AKSHAY KALE"
            style="inline-block overflow-hidden pt-1 -mr-4 sm:-mr-5 md:-mr-7 lg:-mr-9 -mb-1 sm:-mb-2 md:-mb-3 lg:-mb-4"
          />
          <motion.div
            ref={imageRef}
            className="absolute bottom-[-110px] mx-auto sm:bottom-[-100px] md:bottom-[-130px] lg:bottom-[-150px]"
            variants={imageAnimation}
          >
            <Image
              src={profile}
              priority
              alt="Victor's headshot"
              data-blobity-tooltip="Giga Chad"
              data-blobity-invert="false"
              className=" w-[150px] rounded-[16px] grayscale hover:grayscale-0 md:w-[200px] md:rounded-[32px] lg:w-[245px]"
            />
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-10 flex items-center 
      justify-center
      md:bottom-10 lg:w-[90%] lg:max-w-[1440px] lg:justify-between"
      >
        <motion.div
          className="  max-w-[350px] md:max-w-[400px] lg:max-w-[400px]"
          variants={bodyAnimation}
        >
          <p className="z-50 text-center text-[16px] font-medium text-[#e4ded7] md:text-[20px] lg:text-left">
            Full Stack Developer.<br/>
            Building secure digital products.
          </p>
        </motion.div>

        <motion.div
          className="  hidden max-w-[500px] lg:block lg:max-w-[420px]"
          variants={bodyAnimation}
        >
          <p className="text-right text-[16px] font-semibold text-[#e4ded7] md:text-[20px]">
            Securing digital experiences.<br/>
            Always learning cybersecurity.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
