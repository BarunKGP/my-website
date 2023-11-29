import React from "react";
import DarkButton from "./DarkButton";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Bayon, Italianno } from "next/font/google";
import MainLogo from "./MainLogo";

const bayon = Bayon({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-bayon",
});
const hwr = Italianno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-hwr",
});

const links = [
  { href: "/projects", label: "Projects", show: true },
  { href: "/experience", label: "Experience", show: true },
  { href: "/", label: "Blogs", show: false },
  {
    href: "https://drive.google.com/file/d/18kfzzxiHuOqVZdCBnmUnr3cFvJ2KRdmI/view",
    label: "Resume",
    show: true,
  },
];

const linkStyles = {
  true: `p-2 ${bayon.variable} font-bayon text-slate-900 text-2xl dark:text-lime-100 border-b-4 border-b-lime-200`,
  false: `p-2 ${bayon.variable} font-bayon text-slate-900 text-2xl dark:text-lime-100`,
};

function Header() {
  const path = usePathname();
  return (
    <div className="fixed top-0 left-0 w-[100svw] dark:bg-slate-900 bg-indigo-50 bg-opacity-60 hover:bg-opacity-80 transition-transform m-0">
      <div className="grid grid-cols-3 p-5 gap-4  m-2 mx-auto items-center justify-items-end">
        <div className="sitehome flex justify-start w-full">
          <h1
            className={`${hwr.variable} font-hwr text-slate-900 dark:text-lime-100 text-2xl`}
          >
            <Link href="/">{"<barun.das/>"}</Link>
          </h1>
        </div>
        <div className="navlinks w-full">
          <ul className="flex justify-center gap-5 flex-wrap">
            {links.map((link) => {
              return (
                link.show && (
                  <li key={link.href}>
                    {link.label === "Resume" ? (
                      <Link
                        href={link.href}
                        className={linkStyles[link.href === path]}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <Link
                        href={link.href}
                        className={linkStyles[link.href === path]}
                      >
                        {link.label.toUpperCase()}
                      </Link>
                    )}
                  </li>
                )
              );
            })}
          </ul>
        </div>
        <div className="buttons flex justify-end">
          <ul>
            <li className="text-2xl cursor-pointer py-1 hover:ease-in rounded-md">
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
      </div>
    </div>
  );
}

export default Header;
