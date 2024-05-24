import React from "react";

interface IProp {
  className?: string;
  children: React.ReactNode;
}

const index: React.FC<IProp> = ({ className, children }) => {
  return <h2 className={`${className} text-[36px] font-bold`}>{children}</h2>;
};

export default index;
