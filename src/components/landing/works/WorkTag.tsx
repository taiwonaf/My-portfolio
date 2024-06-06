import { Badge } from "@/components/ui/badge";
import React from "react";

interface IProp {
  tag: string;
}

const WorkTag: React.FC<IProp> = ({ tag }) => {
  return (
    <Badge
      variant="secondary"
      className="py-[5px] px-[8px] text-[12px] backdrop-blur-md cursor-pointer rounded-[0] bg-primary text-white"
    >
      {tag}
    </Badge>
  );
};

export default WorkTag;
