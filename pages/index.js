import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillGithub,
  AiFillMediumCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import avatar from "../public/avatar.png";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Barun Das | Homepage</title>
        <meta name="description" content="Barun Das' personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" text-lime-100">
        <section className=" bg-gradient-to-b from-slate-900 to-slate-600 min-h-screen">
          <nav className=" py-10 mb-12 px-5 flex justify-between">
            {/* <h1 className=' text-2xl'></h1> */}
            <ul className=" flex items-center ">
              <li className=" font-mono text-xl">
                <a
                  href="/projects"
                  className=" rounded-md p-2 hover:text-slate-900 hover:bg-lime-100 "
                >
                  Projects
                </a>
              </li>
              <li className=" font-mono text-xl">
                <a
                  href="/experience"
                  className=" rounded-md p-2 hover:text-slate-900 hover:bg-lime-100 "
                >
                  Experience
                </a>
              </li>
            </ul>
            <ul className=" flex items-center">
              <li className="text-2xl cursor-pointer hover:text-black hover:bg-lime-100 rounded-md p-2">
                <BsFillMoonStarsFill />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-emerald-700 to-slate-900 py-2 px-2 border-none rounded-md ml-3 text-stone-200 font-mono hover:text-white "
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" mt-6 relative mx-auto bg-gradient-to-b from-current w-80 rounded-full overflow-hidden">
            <Image src={avatar} />
          </div>
          <div className=" text-center p-5">
            <h2 className=" text-5xl py-2">Barun Das</h2>
            <h3 className=" text-3xl py-2">CS Grad at Georgia Tech</h3>
            <p className=" py-5 text-xl leading-6 text-gray-400">
              I am a machine learning student and researcher who enjoys building
              scalable and efficient software systems
            </p>
          </div>
          <div className=" text-2xl justify-center flex text-gray-300 gap-7 py-1 ">
            <a href=" mailto:barun.das.23@gmail.com" target=" _blank">
              <AiFillMail />
            </a>
            <a href="https://www.linkedin.com/in/barun-das/" target="_blank">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/BarunKGP" target="_blank">
              <AiFillGithub />
            </a>
            <a href="https://medium.com/@barundas_79052" target="_blank">
              <AiFillMediumCircle />
            </a>
          </div>
        </section>
        <section className=" bg-gradient-to-b from-gray-800 to-stone-700 min-h-screen">
          <div>
            <h2 className=" mb-4 text-3xl tracking-tight text-center text-gray-300">
              Contact me
            </h2>
            <form action="#" className=" space-y-8 ">
              <div>
                <label
                  for="email"
                  className=" block mb-2 px-3 text-sm font-medium text-gray-300"
                >
                  Email id
                </label>
                <input
                  type="email"
                  id="email"
                  className=" shadow-sm ml-3 max-w-3 bg-gray-100 border border-gray-300 text-sm rounded-lg focus:border-primary-500 block w-full p-2.5 dark:bg-gray-900 dark:placeholder-gray-400"
                  placeholder="name@email.com"
                  required
                ></input>
              </div>
              <div>
                <label
                  for="subject"
                  className=" block mb-2 px-3 text-sm font-medium text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className=" shadow-sm ml-3 max-w-3 bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5 dark:bg-gray-900 dark:placeholder-gray-400"
                  placeholder="Subject"
                  required
                ></input>
              </div>
              <div className=" sm:col-span-2">
                <label
                  for="message"
                  className=" block mb-2 px-3 text-sm font-medium text-gray-300"
                >
                  Message
                </label>

                <input
                  type="text"
                  id="message"
                  rows="6"
                  className=" sm:w-fit shadow-sm ml-3 bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-500 block w-full p-2.5 dark:bg-gray-900 dark:placeholder-gray-400"
                  placeholder="Your message"
                  required
                ></input>
              </div>
              <button
                type="submit"
                className=" ml-3 py-3 px-2 text-sm text-center rounded-lg bg-slate-700 sm:w-fit hover:bg-slate-800 hover:text-md hover:p-3 focus:outline-none"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
