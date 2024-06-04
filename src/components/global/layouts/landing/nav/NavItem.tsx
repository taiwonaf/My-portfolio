import Link from "next/link";
import React from "react";

interface IProp {
  name: string;
  href: string;
}
const NavItem: React.FC<IProp> = ({ name, href }) => {
  return (
    <Link
      href={href}
      className="text-sm font-semibold leading-6 hover:rounded-md hover:border-input bg-background hover:bg-accent p-2 dark:border-white hover:border box-border"
    >
      {name}
    </Link>
  );
};

export default NavItem;
