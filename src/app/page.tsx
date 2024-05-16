import { LandingContainer } from "@/components";
import { LandingNav } from "@/components/global/layouts/landing";
import React from "react";

const page = () => {
  return (
    <>
      <LandingNav />
      <main>
        <LandingContainer />
      </main>
    </>
  );
};

export default page;
