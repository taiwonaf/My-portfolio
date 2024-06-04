import { Button } from "@/components/ui/button";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface IProp {
  img: StaticImageData;
  name: string;
}

const Skill: React.FC<IProp> = ({ img, name }) => {
  return (
    <div className="flex rounded-md flex-col items-center jusitify-start gap-[10px] border border-input bg-background hover:bg-accent hover:text-accent-foreground p-3">
      <div className="h-[30px] w-[30px]">
        <Image
          src={img.src}
          alt={name}
          width={30}
          height={30}
          className="w-full h-full object-contain"
        />
      </div>
      <h4 className="font-semibold text-[12px]">{name}</h4>
    </div>
  );
};

export default Skill;
