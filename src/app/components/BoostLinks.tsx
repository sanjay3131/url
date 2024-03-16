import Image from "next/image";
import React from "react";

const BoostLinks = () => {
  return (
    <div className="relative h-full  p-5  bg-[#3a3152]">
      <section className=" flex flex-col justify-center items-center gap-6">
        <Image src="/bg-boost-desktop.svg" fill alt="pic" className="-z-0" />
        <h1 className="text-2xl md:text-4xl z-0 font-bold text-white">
          Boost your links today
        </h1>
        <button className="z-0 bg-sky-400 px-5 p-2 rounded-full text-white font-bold">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default BoostLinks;
