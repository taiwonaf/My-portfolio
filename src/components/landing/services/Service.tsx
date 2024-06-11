import React, { useState } from "react";
import WorkTag from "./WorkTag";
import { LinkIcon } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ImgPlaceholder from "@/assets/images/image_placeholder.jpg";

interface IProp {
  title: string;
  description: string;
  tags: string[];
  img: StaticImageData;
}

const Service: React.FC<IProp> = ({ img, title, description, tags }) => {
  return (
    <div className="max-w-[300px] w-full border border-input bg-background hover:bg-accent">
      <div className="w-full h-[200px]">
        <Image
          src={img.src}
          alt="sample img"
          className="w-full h-full object-cover"
          width={200}
          height={200}
        />
      </div>
      <div className="px-[15px] py-[20px]">
        <h3 className=" text-lg mb-[10px] text-center font-semibold">
          {title}
        </h3>
        {/* <p className="text-left text-md font-light mb-[10px]">{description}</p> */}
        {/* <div className="flex justify-start items-center mb-[20px]">
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
        </div> */}
      </div>
    </div>
  );
};

export default Service;
