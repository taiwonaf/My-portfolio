import { Github, MailIcon, XIcon } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

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
    <div className="flex justify-start items-center gap-[10px]">
      {socials.map((item, index) => {
        return (
          <Link
            key={index}
            href={item.link}
            className=" rounded-md border-input bg-background hover:bg-accent p-2 dark:border-white border"
          >
            <item.icon className="h-5 w-5" />
          </Link>
        );
      })}
    </div>
  );
};

export default index;
