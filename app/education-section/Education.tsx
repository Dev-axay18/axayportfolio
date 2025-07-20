import EducationCard from "./EducationCard";
import { educationDetails } from "./educationDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="education" className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Education"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Academic Background and Educational Achievements"
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <motion.div className="grid w-[90%] max-w-[1345px] grid-cols-1 grid-rows-3 place-content-center place-items-center gap-x-6 gap-y-6 sm:grid-cols-2  sm:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1">
        {educationDetails.map((education, index) => {
          return (
            <EducationCard
              key={index}
              degree={education.degree}
              institution={education.institution}
              duration={education.duration}
              location={education.location}
              description={education.description}
              gpa={education.gpa}
              image={education.image}
              link={education.link}
              index={index}
            />
          );
        })}
      </motion.div>
    </section>
  );
};

export default Education; 