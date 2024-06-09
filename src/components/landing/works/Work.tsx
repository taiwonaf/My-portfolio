import React, { useState } from "react";
import WorkTag from "./WorkTag";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ImgPlaceholder from "@/assets/images/image_placeholder.jpg";

const Work = () => {
  return (
    <div className="max-w-[300px] w-full border border-input bg-background hover:bg-accent">
      <div className="w-full h-[200px]">
        <Image
          src={ImgPlaceholder}
          alt="sample img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-[15px] py-[20px]">
        <h3 className="text-left text-lg mb-[10px]">Project title</h3>
        <p className="text-left text-md font-light mb-[10px]">
          project description ...
        </p>
        <div className="flex justify-start items-center mb-[20px]">
          <WorkTag tag="sample skill ..." />
        </div>
        <div className="flex gap-[10px] justify-start items-center">
          <LinkIcon className="h-[15px] w-[15px]" />
          <Link
            href={"#"}
            className="font-extralight text-sm hover:marker:underline"
          >
            Live preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
