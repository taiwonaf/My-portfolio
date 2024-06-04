import { Socials } from "@/components";
import Link from "next/link";
import React from "react";

const index = () => {
  return (
    <div className="flex justify-center items-center px-[16px]">
      <div className="max-w-7xl w-full border-t border-input py-4 flex justify-between items-center gap-[20px] flex-wrap">
        <h2>Taiwonaf</h2>
        <div className="flex justify-end items-center gap-[10px] flex-wrap">
          <Link href="#">+234 81 0665 44 06</Link>
          <Link href="#">nafiutaiwosolomon@gmail.com</Link>
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default index;
