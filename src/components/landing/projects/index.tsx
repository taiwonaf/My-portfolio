"use client";

import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/components/global";
import React from "react";
import Project from "./Project";

const index = () => {
  const works = [
    {
      title: "Laundry App",
      description:
        "The Laundry App is your ultimate companion for managing all your laundr needs efficiently and conveniently. D...",
      tags: ["Figma", "Illustrator"],
      link: "#",
    },
    {
      title: "Laundry App",
      description:
        "The Laundry App is your ultimate companion for managing all your laundr needs efficiently and conveniently. D...",
      tags: ["Figma", "Illustrator"],
      link: "#",
    },
    {
      title: "Laundry App",
      description:
        "The Laundry App is your ultimate companion for managing all your laundr needs efficiently and conveniently. D...",
      tags: ["Figma", "Illustrator"],
      link: "#",
    },
    {
      title: "Laundry App",
      description:
        "The Laundry App is your ultimate companion for managing all your laundr needs efficiently and conveniently. D...",
      tags: ["Figma", "Illustrator"],
      link: "#",
    },
  ];
  return (
    <SectionContainer className="pt-[50px] pb-[100px] text-center" id="works">
      <SectionTitle title="Personal projects" />
      <div className="flex justify-center items-center">
        <SectionDescription className="max-w-[700px] w-full mb-[30px] text-primary">
          Personnal stuffs i have done before
        </SectionDescription>
      </div>
      <div className="flex justify-center items-center flex-wrap gap-[20px]">
        {works.map((item, index) => {
          return <Project {...item} key={index} />;
        })}
      </div>
    </SectionContainer>
  );
};

export default index;
