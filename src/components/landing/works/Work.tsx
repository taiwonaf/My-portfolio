import React from "react";
import WorkTag from "./WorkTag";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

const Work = () => {
  return (
    <div className="max-w-[290px] w-full border border-input bg-background hover:bg-accent">
      <div className="px-[15px] py-[20px]">
        <h3 className="text-left text-lg mb-[10px]">KRDFonts Website</h3>
        <p className="text-left text-md font-light mb-[10px]">
          KRDFonts is a dynamic online platform that caters to the diverse needs
          of designers, developers, and creative ...
        </p>
        <div className="flex justify-start items-center mb-[20px]">
          <WorkTag tag="HTML" />
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
