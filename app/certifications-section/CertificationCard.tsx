import { certificationProps } from "./certificationDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFilePdf, faDownload } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import slash from "../../public/review-slash.svg";
import { motion } from "framer-motion";
import { useState } from "react";

const CertificationCard = ({
  title,
  issuer,
  date,
  credentialId,
  image,
  link,
  index,
  isOfferLetter,
}: certificationProps) => {
  const [showModal, setShowModal] = useState(false);
  
  // Check if the file is a PDF
  const isPdf = link?.toLowerCase().endsWith('.pdf') || image?.toLowerCase().endsWith('.pdf');
  console.log('PDF Check:', { link, image, isPdf, title });
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
      className="relative flex h-[500px] w-[100%] flex-col items-start justify-between rounded-[23px] border-[3px] border-[#212531] bg-transparent p-[28px] lg:max-w-[438px]"
    >
      <Image
        src={slash}
        alt={"title"}
        className="absolute top-[34px] left-[28px] w-[51px]"
      />
      <div className="mt-10 flex flex-col gap-4 flex-1">
        <h3 className="text-[20px] font-bold leading-relaxed tracking-wide text-[#e4ded7] line-clamp-2 min-h-[3rem]">
          {title}
        </h3>
        <p className="text-[16px] font-[500] leading-relaxed tracking-wide text-[#95979D] line-clamp-1">
          Issued by {issuer}
        </p>
        <p className="text-[14px] font-[400] leading-relaxed tracking-wide text-[#95979D]">
          {date}
        </p>
        {credentialId && (
          <p className="text-[12px] font-[400] leading-relaxed tracking-wide text-[#95979D]">
            ID: {credentialId}
          </p>
        )}
      </div>
      <div className="flex flex-col gap-3 pr-7 items-center min-h-[140px] justify-center">
        {isPdf ? (
          <div className="flex flex-col items-center gap-2">
            <div 
              className="h-[120px] w-[180px] rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex flex-col items-center justify-center cursor-pointer border border-[#212531] shadow-lg hover:scale-105 transition-transform relative overflow-hidden"
              onClick={() => setShowModal(true)}
            >
              <div className="absolute inset-0 bg-white opacity-10"></div>
              <FontAwesomeIcon icon={faFilePdf} className="text-white text-3xl mb-2 z-10" />
              <span className="text-white text-[10px] font-medium z-10 text-center px-2">PDF Document</span>
              <div className="absolute bottom-2 left-2 right-2 h-1 bg-white opacity-30 rounded-full"></div>
            </div>
            <span className="text-[12px] text-[#95979D] text-center">Click to view PDF</span>
          </div>
        ) : image ? (
          <div className="flex flex-col items-center gap-2">
            <img
              src={image}
              alt={title}
              className="h-[120px] w-[180px] rounded-lg bg-contain bg-center object-cover cursor-pointer border border-[#212531] shadow-lg hover:scale-105 transition-transform"
              onClick={() => setShowModal(true)}
            />
            <span className="text-[12px] text-[#95979D] text-center">Click to view full size</span>
          </div>
        ) : (
          <div className="h-[120px] w-[180px] rounded-lg border-2 border-dashed border-[#212531] flex items-center justify-center">
            <span className="text-[12px] text-[#95979D] text-center">No Preview</span>
          </div>
        )}
        <div className="flex flex-col gap-2 items-center">
          {link && (
            <button
              onClick={() => setShowModal(true)}
              className="flex items-center gap-2 text-[14px] font-[500] leading-[16px] text-[#e4ded7] hover:text-[#95979D] transition-colors"
            >
              {isOfferLetter ? "View Full Offer" : "View Full Certificate"}
              <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
            </button>
          )}
          {isPdf && link && (
            <a
              href={link}
              download
              className="flex items-center gap-2 text-[12px] font-[500] leading-[16px] text-[#95979D] hover:text-[#e4ded7] transition-colors"
            >
              <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
              Download PDF
            </a>
          )}
        </div>
      </div>
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4">
          <div className="relative bg-[#181A20] rounded-lg p-4 w-full max-w-6xl h-[90vh] flex flex-col items-center">
            <button
              className="absolute top-4 right-4 text-white text-2xl font-bold z-10 bg-[#212531] rounded-full w-8 h-8 flex items-center justify-center hover:bg-[#2a2d3a] transition-colors"
              onClick={() => setShowModal(false)}
            >
              ×
            </button>
            {isPdf ? (
              <div className="w-full h-full flex flex-col items-center">
                <div className="flex gap-4 mb-4 w-full justify-center">
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#e4ded7] underline hover:text-[#95979D] bg-[#212531] px-4 py-2 rounded-lg hover:bg-[#2a2d3a] transition-colors"
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="w-3 h-3" />
                    Open in New Tab
                  </a>
                  <a
                    href={link}
                    download
                    className="flex items-center gap-2 text-[#e4ded7] underline hover:text-[#95979D] bg-[#212531] px-4 py-2 rounded-lg hover:bg-[#2a2d3a] transition-colors"
                  >
                    <FontAwesomeIcon icon={faDownload} className="w-3 h-3" />
                    Download PDF
                  </a>
                </div>
                <iframe
                  src={`${link}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                  className="w-full h-full rounded-lg border border-[#212531]"
                  title={title}
                  style={{ minHeight: '500px', flex: 1 }}
                />
              </div>
            ) : (
              <>
                <img
                  src={image}
                  alt={title}
                  className="max-h-[70vh] w-auto rounded-lg mb-4 border border-[#212531]"
                />
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#e4ded7] underline hover:text-[#95979D]"
                  >
                    Open Full Document
                  </a>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CertificationCard; 