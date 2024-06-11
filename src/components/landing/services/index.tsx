"use client";

import {
  SectionContainer,
  SectionDescription,
  SectionTitle,
} from "@/components/global";
import React, { useState } from "react";
import Work from "./Service";
import { motion } from "framer-motion";
import Service from "./Service";
import { LowCodeImg, MobileDevelopmentImg, WebDevelopmentImg } from "@/assets";

const index = () => {
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
  const works = [
    {
      title: "Web development",
      description:
        "The Laundry App is your ultimate companion for managing all your laundr needs efficiently and conveniently. D...",
      tags: ["Figma", "Illustrator"],
      img: WebDevelopmentImg,
    },
    {
      title: "Mobile app development",
      description:
        "The Laundry App is your ultimate companion for managing all your laundr needs efficiently and conveniently. D...",
      tags: ["Figma", "Illustrator"],
      img: MobileDevelopmentImg,
    },
    {
      title: "Low code no code",
      description:
        "The Laundry App is your ultimate companion for managing all your laundr needs efficiently and conveniently. D...",
      tags: ["Figma", "Illustrator"],
      img: LowCodeImg,
    },
  ];
  return (
    <SectionContainer className="pt-[50px] pb-[100px] text-center" id="works">
      <SectionTitle title="Services" />
      <div className="flex justify-center items-center">
        <SectionDescription className="max-w-[700px] w-full mb-[30px] text-primary">
          What I do
        </SectionDescription>
      </div>
      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="flex justify-center items-center flex-wrap gap-[20px]"
      >
        {works.map((item, index) => {
          return <Service {...item} key={index} />;
        })}
      </motion.div>
    </SectionContainer>
  );
};

export default index;
