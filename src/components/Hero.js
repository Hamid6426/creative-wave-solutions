import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    <div className="w-full flex flex-row justify-start items-start h-dvh">
      
      <div className="w-full lg:w-3/12 flex flex-col justify-center items-start lg:pl-12 gap-4 h-5/6">
        <h1 className="text-4xl font-bold max-w-[200px] text-center lg:text-left">
          Where Innovation Meets Design & Tech
        </h1>
        <Link
          href="/services"
          className="bg-green-600 text-white font-bold rounded-lg hover:bg-green-400 text-lg px-6 py-2"
        >
          Explore Services
        </Link>
      </div>

      <div className="hidden w-9/12 lg:flex flex-col justify-center items-center h-5/6">
        <Image
          src="/hero.png"
          width={800}
          height={450}
          alt="hero image"
          className="w-12/12 rounded-xl"
        />
      </div>
    </div>
  );
}
