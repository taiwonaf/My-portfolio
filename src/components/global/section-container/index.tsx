import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProp {
  className?: string;
  children: React.ReactNode;
  bgImage?: StaticImageData;
}

const index: React.FC<IProp> = ({ className, children, bgImage }) => {
  return (
    <div
      className={`flex justify-center items-center px-[16px] ${className} relative`}
    >
      {bgImage && (
        <div className="absolute z-[1] inset-0">
          <Image
            src={bgImage.src}
            alt="background image"
            width={500}
            height={500}
            className="w-full h-full object-cover opacity-20"
          />
        </div>
      )}
      <div className="max-w-7xl w-full relative z-[2]">{children}</div>
    </div>
  );
};

export default index;
