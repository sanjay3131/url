"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Toaster, toast } from "sonner";

const URL_Section = () => {
  const [url, setUrl] = useState("");
  const [resultUrl, setResultUrl] = useState("");
  const [resultArray, setResultArray] = useState<
    { url: string; resultUrl: string }[]
  >([]);

  const apiCall = async (inputUrl: string) => {
    const apiurl = "https://url-shortener-service.p.rapidapi.com/shorten";
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": "cbc2888445mshb13e2803d26ae0dp155943jsnf6aead41c55d",
        "X-RapidAPI-Host": "url-shortener-service.p.rapidapi.com",
      },
      body: new URLSearchParams({
        url: inputUrl,
      }),
    };

    try {
      const response = await fetch(apiurl, options);
      const result = await response.json();
      setResultUrl(result.result_url);
      setResultArray([
        ...resultArray,
        { url: inputUrl, resultUrl: result.result_url },
      ]);

      console.log(result, resultUrl, resultArray);
    } catch (error) {
      console.error(error);
    }
    setUrl("");
  };
  const copyText = (i: string) => {
    navigator.clipboard.writeText(i);
    {
      toast.success("URL copyed");
    }
  };

  return (
    <div className=" ">
      <div
        className="w-full relative  bg-[#3a3152] flex flex-col gap-5 justify-center items-center p-8 rounded-lg
      md:flex md:flex-row relative -top-24 "
      >
        <Image
          src="/bg-shorten-desktop.svg"
          fill
          className="-z-0 "
          alt="image"
        />
        <input
          type="text"
          placeholder="Shorten a link here..."
          className="w-full p-5 rounded-lg z-0
          md:w-[80%] outline-blue-500 overflow-hidden  bg-red-200"
          onChange={(e) => setUrl(e.target.value)}
          value={url}
        />
        {/* {!url && (
          <span>
            <h3 className="text-white">please add a link</h3>
          </span>
        )} */}

        <button
          onClick={() => apiCall(url)}
          className="z-0 bg-sky-500 w-full p-5 rounded-lg 
        md:w-[20%]  text-white font-bold text-xl"
        >
          Shorten it!
        </button>
      </div>
      {/* result url */}
      <section className="relative -top-16 rounded-lg ">
        {resultArray.map((resultArrays) => (
          <div className="  bg-white rounded-lg p-4 flex flex-col gap-5 mb-3 md:flex md:flex-row md:justify-center md:items-center w-full">
            <h1 className="md:w-[60%] overflow-hidden">{resultArrays.url}</h1>
            <h2
              className="md:w-[20%] hover:text-green-500 text-green-600 font-bold cursor-pointer"
              onClick={() => copyText(resultArrays.resultUrl)}
            >
              {resultArrays.resultUrl}{" "}
            </h2>
            <Toaster richColors />
            <button
              className="md:w-[10%] bg-sky-400 rounded-lg p-3  text-white font-bold text-xl"
              onClick={() => copyText(resultArrays.resultUrl)}
            >
              Copy
            </button>
          </div>
        ))}
      </section>
    </div>
  );
};

export default URL_Section;
