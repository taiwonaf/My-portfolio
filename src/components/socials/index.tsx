import { Github, MailIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const socials = [
  {
    name: "Github",
    icon: Github,
    link: "github.com/taiwonaf",
  },
  {
    name: "X",
    icon: XIcon,
    link: "x.com/taiwonaf",
  },
  {
    name: "Mail",
    icon: MailIcon,
    link: "gmail.com/taiwonaf",
  },
];

const index = () => {
  return (
    <div className="flex justify-center items-center md:justify-start md:items-center gap-[20px]">
      <h4 className="text-lg font-semibold">Socials: </h4>
      <div className="flex justify-start items-center gap-[10px]">
        {socials.map((item, index) => {
          return (
            <Button
              key={index}
              variant={"outline"}
              className="border-black dark:border-white border-[2px]"
            >
              <item.icon className="h-5 w-5" />
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default index;
