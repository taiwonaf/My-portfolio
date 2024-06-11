import React from "react";
import Hero from "./hero";
import AboutMe from "./about";
import Skills from "./skills";
import Works from "./works";
import Experience from "./experience";
import Services from "./services";
import Projects from "./projects";

const index = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Services />
      <Skills />
      <Works />
      <Experience />
      <Projects />
    </>
  );
};

export default index;
