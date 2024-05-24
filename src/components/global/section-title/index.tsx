import { Badge } from "@/components/ui/badge";
import React from "react";

interface IProp {
  title: string;
}

const index: React.FC<IProp> = ({ title }) => {
  return (
    <Badge
      variant="secondary"
      className="rounded-[0] py-[10px] px-[14px] text-[16px] backdrop-blur-md"
    >
      {title}
    </Badge>
  );
};

export default index;
