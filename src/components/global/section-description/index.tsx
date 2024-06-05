import React from "react";

interface IProp {
  className?: string;
  children: React.ReactNode;
}

const index: React.FC<IProp> = ({ className, children }) => {
  return (
    <h2
      className={`${className} text-[28px] leading-[32px] md:text-[36px] md:leading-[36px] font-bold`}
    >
      {children}
    </h2>
  );
};

export default index;
