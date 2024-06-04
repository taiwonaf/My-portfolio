import { Badge } from "@/components/ui/badge";
import React from "react";

interface IProp {
  title: string;
}

const index: React.FC<IProp> = ({ title }) => {
  return (
    <Badge
      variant="secondary"
      className="py-[10px] px-[14px] text-[16px] backdrop-blur-md cursor-pointer rounded-[0]"
    >
      {title}
    </Badge>
  );
};

export default index;
