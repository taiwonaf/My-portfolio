import { MobileProfile, ProfilePic, HeroBgImg } from "@/assets";
import { Socials } from "@/components";
import { SectionContainer } from "@/components/global";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <SectionContainer bgImage={HeroBgImg}>
      <div className="flex flex-col md:flex-row justify-center gap-[50px] sm:gap-[20px] md:justify-between items-center min-h-screen pt-[150px] pb-[150px]">
        <div className="md:flex-[0.5] order-2 md:order-1 text-center md:text-left">
          <div className="mb-[20px] flex flex-col gap-[10px] max-w-[550px]">
            <h2 className="text-xl">Hi, I&apos;m</h2>
            <h1 className="text-5xl font-bold">Nafiu Taiwo Solomon</h1>
            <p className="text-lg">
              A passionate <span>Frontend Web developer</span> with 3 years
              experience creating user friendly websites
            </p>
          </div>
          <Button className="capitalize border-black dark:border-white border-[2px] font-semibold mb-[40px]">
            Contact me
          </Button>
          <Socials />
        </div>
        <div className="md:flex-[0.5] order-1 md:order-2 flex justify-center items-center md:justify-end md:items-start">
          <div className="w-full h-full max-h-[400px] md:max-h-none md:h-[400px]">
            <Image
              className="hidden md:block w-full h-full object-contain"
              src={ProfilePic}
              alt="taiwo profile image"
            />
            <Image
              className="md:hidden"
              src={MobileProfile}
              alt="taiwo profile image"
            />
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Hero;
