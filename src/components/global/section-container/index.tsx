import React from "react";

interface IProp {
  className?: string;
  children: React.ReactNode;
}

const index: React.FC<IProp> = ({ className, children }) => {
  return (
    <div className={`flex justify-center items-center px-[16px] ${className}`}>
      <div className="max-w-7xl w-full">{children}</div>
    </div>
  );
};

export default index;
