"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setOpen] = useState(true);
  useEffect(() => {
    const updateIsOpen = () => {
      setOpen(window.innerWidth >= 768);
    };

    updateIsOpen();

    window.addEventListener("resize", updateIsOpen);

    return () => {
      window.removeEventListener("resize", updateIsOpen);
    };
  }, []);
  const pathName = usePathname();

  return (
    <div className="w-full  relative">
      <nav className=" flex justify-between p-6 items-center">
        <Link href="/">
          <Image
            src="/logo.svg"
            width={100}
            height={100}
            alt="logoImage"
          ></Image>
        </Link>
        {isOpen && (
          <span
            className=" absolute top-[100%] flex flex-col gap-8 bg-purple-950 w-[90%] text-white p-8  rounded-2xl 
                           md:relative  md:flex  md:bg-white  md:text-gray-500 md:rounded-none md:w-full md:justify-around  md:flex-row md:items-center"
          >
            {/* page routes */}
            <ul
              className="flex flex-col justify-center gap-6 text-xl font-bold text-center border-b-2 pb-8 border-white
                             md:flex  md:flex-row md:p-0 md:border-0"
            >
              <Link href="/features" className=" md:hover:text-black">
                Features
              </Link>
              <Link href="/priceing" className=" md:hover:text-black">
                Priceing
              </Link>
              <Link href="/resources" className=" md:hover:text-black">
                Resources
              </Link>
            </ul>

            {/* login signup buttons */}
            <ul
              className="flex flex-col justify-center items-center
            text-xl font-bold text-center gap-6 
             md:flex md:flex-row "
            >
              <Link href="/loginPage">
                <button className="md:hover:text-black">Login</button>
              </Link>
              <Link href="/signupPage">
                <button
                  className="bg-sky-400 
                rounded-full w-32 h-10 text-white"
                >
                  Sign Up
                </button>
              </Link>
            </ul>
          </span>
        )}

        {/* Hamburger icon  */}
        <button onClick={() => setOpen(!isOpen)} className="md:hidden">
          <Image
            width={40}
            height={40}
            alt="hamburger-icon"
            src="/hamburger-menu.svg"
          ></Image>
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
