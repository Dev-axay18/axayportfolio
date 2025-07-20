import CertificationCard from "./CertificationCard";
import { certificationDetails } from "./certificationDetails";
import AnimatedWords2 from "../animations/AnimatedWords2";
import { monaSans } from "../fonts/monaSans";
import AnimatedBody from "../animations/AnimatedBody";
import { motion } from "framer-motion";

const Certifications = () => {
  const certificates = certificationDetails.filter((c) => !c.isOfferLetter);
  const offerLetters = certificationDetails.filter((c) => c.isOfferLetter);
  return (
    <section id="certifications" className="z-10 flex w-full flex-col items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-20 md:pb-16 lg:pb-24">
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Certifications & Offers"}
          style={`flex max-w-[500px] flex-col items-start text-left pr-5 ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,14vw,155.04px)]`}
        />
        <AnimatedBody
          text="Professional Certifications and Offer Letters That Validate My Skills and Experience"
          className="w-[90%] text-center text-[14px] font-semibold uppercase sm:w-[500px] md:w-[550px] md:text-[16px]"
        />
      </div>
      <div className="w-full flex flex-col gap-16">
        <div>
          <h2 className="text-3xl font-bold mb-8 text-[#e4ded7] text-center">Certificates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((certification, index) => (
              <CertificationCard key={index} {...certification} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-bold mb-8 text-[#e4ded7] text-center">Offer Letters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offerLetters.map((offer, index) => (
              <CertificationCard key={index} {...offer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications; 