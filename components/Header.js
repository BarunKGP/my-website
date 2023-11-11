import React from "react";
import DarkButton from "./DarkButton";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  //   { href: "/about" },
];
function Header() {
  const path = usePathname();
  return (
    <nav className="grid grid-cols-5 h-[100px] p-5 gap-2 max-w-screen items-center">
      <div className="sitehome border-red-400 text-start">
        <h1 className="text-center font-mono text-gray-500 text-3xl">
          <Link href="/">barun.das</Link>
        </h1>
      </div>
      <div className="navlinks border-red-400 col-span-3">
        <ul className=" flex w-full justify-center gap-7">
          {links.map((link) => {
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className=" rounded-md p-2 font-mono text-xl text-gray-500"
                >
                  {console.log("path:", path)}
                  {console.log("href = link?", link.href === path)}
                  {link.href === path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute"
                      //   whileHover={{
                      //     color: "rgb(15 23 42)",
                      //     scale: 1.1,
                      //     "background-color": "rgb(236 252 203)",
                      //     transition: {
                      //       // delay: 0.05,
                      //       duration: 0.2,
                      //     },
                      //   }}
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
          {/* <motion.li
            className=" font-mono "
            whileHover={{
              "--tw-text-opacity": 1,
              color: "rgb(15 23 42)",
              scale: 1.1,
              "background-color": "rgb(236 252 203)",
              transition: {
                // delay: 0.05,
                duration: 0.2,
              },
            }}
          >
            <Link
              href="/projects"
              className=" rounded-md p-2 text-xl text-gray-500"
            >
              Projects
            </Link>
          </motion.li>
          <li className=" font-mono">
            <a
              href="/experience"
              className=" rounded-md p-2 text-xl text-gray-500 hover:text-slate-900 hover:bg-lime-100 hover:scale-110 transition-transform "
            >
              Experience
            </a>
          </li> */}
        </ul>
      </div>
      <div className="buttons">
        <ul className=" flex justify-end items-center gap-4">
          <li className="text-2xl cursor-pointer hover:text-black hover:bg-lime-100 rounded-md p-2">
            <DarkButton />
          </li>
          <li>
            <a
              className=" bg-gradient-to-r from-emerald-700 to-slate-900 py-2 px-2 border-none rounded-md ml-3 text-stone-200 font-mono hover:text-white "
              href="https://drive.google.com/file/d/18kfzzxiHuOqVZdCBnmUnr3cFvJ2KRdmI/view"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // <nav className=" py-10 px-5 flex gap-6 justify-between h-[100px]">
    //   {/* <h1 className=' text-2xl'></h1> */}
    //   <ul className=" flex items-center ">
    //     <li className=" font-mono ">
    //       <a
    //         href="/projects"
    //         className=" rounded-md p-2 text-2xl text-gray-500 hover:text-slate-900 hover:bg-lime-100 hover:scale-110"
    //       >
    //         Projects
    //       </a>
    //     </li>
    //     <li className=" font-mono">
    //       <a
    //         href="/experience"
    //         className=" rounded-md p-2 text-2xl text-gray-500 hover:text-slate-900 hover:bg-lime-100 hover:scale-110 transition-transform "
    //       >
    //         Experience
    //       </a>
    //     </li>
    //   </ul>
    //   <ul className=" flex items-center">
    //     <li className="text-2xl cursor-pointer hover:text-black hover:bg-lime-100 rounded-md p-2">
    //       <DarkButton />
    //     </li>
    //     <li>
    //       <a
    //         className=" bg-gradient-to-r from-emerald-700 to-slate-900 py-2 px-2 border-none rounded-md ml-3 text-stone-200 font-mono hover:text-white "
    //         href="https://drive.google.com/file/d/18kfzzxiHuOqVZdCBnmUnr3cFvJ2KRdmI/view"
    //         target="_blank"
    //       >
    //         Resume
    //       </a>
    //     </li>
    //   </ul>
    // </nav>
  );
}

export default Header;
