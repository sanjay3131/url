import Image from "next/image";
import URL_Section from "./components/URL_Section";
import Features from "./components/Features";
import BoostLinks from "./components/BoostLinks";

export default function Home() {
  return (
    <main className=" box-border ">
      <div className="flex flex-col gap-10">
        {/* section one */}
        <section
          className="flex flex-col gap-14  flex-col-reverse  
        md:flex md:flex-row md:justify-between p-10"
        >
          <div
            className="flex flex-col gap-6 justify-center items-center w-full
          md:w-[50%]  md:items-start"
          >
            <h1
              className="text-6xl text-black font-bold  text-center
            md:text-start"
            >
              More that just shorter links
            </h1>
            <p
              className="text-2xl text-center text-gray-500 
            md:text-start
            "
            >
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
            <button
              className="  px-5 py-2 rounded-full bg-sky-500 text-white font-bold  
             
            "
            >
              Get Started
            </button>
          </div>
          {/* hero image */}
          <div
            className="flex justify-center items-center
          md:w[50%] "
          >
            <Image
              src="/illustration-working.svg"
              width={600}
              height={600}
              alt="hero-Image"
              className=""
            ></Image>
          </div>
        </section>

        {/* section two */}
        <section className=" bg-[#f0f0f7] p-20 h-full pb-32">
          {/* URL upload bar  */}
          <URL_Section />
          <Features />
        </section>
      </div>
      <div>
        <BoostLinks />
      </div>
    </main>
  );
}
