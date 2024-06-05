"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import NavItem from "./NavItem";
import { ModeToggle } from "@/components/global";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const navigation = [
  { name: "Home", href: "#" },
  { name: "About me", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Works", href: "#works" },
  { name: "Experience", href: "#experience" },
];

const LandingNav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-[20px] right-0 left-0 px-[16px] z-[10000]">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 px-6 py-4 lg:px-8 border-[1px] border-black dark:border-white/50 backdrop-blur-sm bg-white/50 dark:bg-background/50 rounded-md"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Nafiu Taiwo Portofilio</span>
            <h1>taiwonaf</h1>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-6">
          {navigation.map((item) => (
            <NavItem key={item.name} {...item} />
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-4">
          <ModeToggle />
          <Separator
            orientation="vertical"
            className="bg-background h-[20px]"
          />
          <Button className="capitalize border-black dark:border-white border-[2px] font-semibold">
            Contact me
          </Button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      <Dialog
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-[100000]" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[1000000] w-full overflow-y-auto bg-white dark:bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between gap-x-6">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Nafiu Taiwo Portofilio</span>
              <h1>taiwonaf</h1>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-[100px] flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6 flex flex-col">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-sm font-semibold leading-6 hover:rounded-md hover:border-input bg-background hover:bg-accent p-2 dark:border-white hover:border"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Button className="capitalize border-black border-[2px] font-semibold">
                  Contact me
                </Button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default LandingNav;
