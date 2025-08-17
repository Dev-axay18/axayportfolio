import React from "react";
import Link from "next/link";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0E1016] text-[#e4ded7] gap-5 p-6">
      <p className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] text-center uppercase">
        Annnaa… this ain’t the rooooad (Error 404)
      </p>
      
      <Image
        src="https://raw.githubusercontent.com/Dev-axay18/axayportfolio/main/public/stressed-screamibg.png"
        alt="Funny Meme"
        width={858}
        height={483}
        className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] max-h-[60vh] object-contain"
      />

      <div>
        <Link 
          href="/" 
          className="text-[25px] sm:text-[30px] md:text-[35px] lg:text-[40px] uppercase"
        >
          Head back to my{" "}
          <span className="underline underline-offset-2">Portfolio</span>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
