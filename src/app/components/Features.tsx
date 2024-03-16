import Image from "next/image";
import React from "react";

const Features = () => {
  const data = [
    {
      id: 0,
      image: "/icon-brand-recognition.svg",
      h1: "Brand Recognition",
      p: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      id: 10,
      image: "/icon-detailed-records.svg",
      h1: "Detailed Records",
      p: "Gain insights into who is clicking your links. Knowing when people engage with your content helps inform better decisions.",
    },
    {
      id: 20,
      image: "/icon-fully-customizable.svg",
      h1: "Fully Customizable",
      p: "Improve brand awareness and content discoverability through customizable links, supercharging audiance engagement.",
    },
  ];
  return (
    <div>
      <div className="w-full">
        <section className="text-center flex flex-col gap-3 mb-20">
          <h1 className="text-4xl font-bold">Advanced Statistics</h1>
          <p className="text-xl ">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </section>
        {/* cards  */}
        <section className="relative md:h-[60vh] flex flex-col gap-16 md:flex md:flex-row md:gap-16 md:flex-wrap lg:flex-nowrap">
          {data.map((datas) => (
            <div
              className={`rounded-lg  flex flex-col  justify-center items-center bg-white p-8 pt-20 gap-4 
         relative md:min-w-[25%]   md:mt-${datas.id}  `}
            >
              <div className="bg-blue-950 w-fit p-5 rounded-full  absolute -top-10 md:left-16">
                <Image
                  src={datas.image}
                  width={50}
                  height={50}
                  alt="logo"
                ></Image>
              </div>
              <h1 className="text-2xl font-bold text-center md:text-3xl  px-4">
                {datas.h1}
              </h1>
              <p className="text-lg text-center md:text-xl">{datas.p}</p>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Features;
