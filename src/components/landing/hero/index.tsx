import { SectionContainer } from "@/components/global";
import { Button } from "@/components/ui/button";
import React from "react";

const index = () => {
  return (
    <SectionContainer>
      <div className="flex justify-between items-center h-screen">
        <div>
          <div className="mb-[20px] flex flex-col gap-[10px] max-w-[550px]">
            <h2 className="text-xl">Hi, I'm</h2>
            <h1 className="text-5xl font-bold">Nafiu Taiwo Solomon</h1>
            <p className="text-lg">
              A passionate <span>Frontend Web developer</span> with 3 years
              experience creating user friendly websites
            </p>
          </div>
          <Button className="capitalize border-black dark:border-white border-[2px] font-semibold">
            Contact me
          </Button>
        </div>
        <div></div>
      </div>
    </SectionContainer>
  );
};

export default index;
