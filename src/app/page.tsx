import { LandingContainer } from "@/components";
import { LandingFooter, LandingNav } from "@/components/global/layouts/landing";
import React from "react";

const page = () => {
  return (
    <>
      <LandingNav />
      <main>
        <LandingContainer />
      </main>
      <LandingFooter />
    </>
  );
};

export default page;
