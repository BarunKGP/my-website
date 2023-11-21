import React from "react";
import DarkButton from "./DarkButton";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import MainLogo from "./MainLogo";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
];

const linkStyles = {
  true: "p-2 font-mono text-purple-950 text-xl dark:text-lime-100 border-b-4 border-b-lime-200",
  false: "p-2 font-mono text-purple-950 text-xl dark:text-lime-100",
};

function Header() {
  const path = usePathname();
  return (
    <div className="fixed overflow-hidden top-0 w-full h-28 z-10 block">
      <nav className="grid grid-cols-5 h-[100px] p-5 gap-2 items-center m-2 mx-auto ">
        <div className="sitehome text-start">
          <h1 className="text-center font-mono text-purple-950 text-xl dark:text-lime-100">
            <Link href="/">barun.das</Link>
          </h1>
        </div>
        <div className="navlinks col-span-3">
          <ul className=" flex w-full justify-center gap-7">
            {links.map((link) => {
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={linkStyles[link.href === path]}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="buttons">
          <ul className=" flex justify-end px-20">
            <li className="text-2xl cursor-pointer hover:bg-purple-500 dark:hover:bg-lime-400 py-1 hover:ease-in rounded-md">
              <DarkButton />
            </li>
            {/* <li>
              <a
                className=" bg-gradient-to-r from-emerald-700 to-slate-900 py-2 px-2 border-none rounded-md ml-3 text-stone-200 font-mono hover:text-white "
                href="https://drive.google.com/file/d/18kfzzxiHuOqVZdCBnmUnr3cFvJ2KRdmI/view"
                target="_blank"
              >
                Resume
              </a>
            </li> */}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
