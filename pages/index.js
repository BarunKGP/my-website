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
import LearnMore from "@/components/LearnMore";
import DarkButton from "@/components/DarkButton";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function hackerize(event, iterSkip = 1 / 3) {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) return event.target.dataset.value[index];
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);
    iterations += iterSkip;
  }, 40);
}

export default function Home() {
  let subtitle =
    "Software Developer " + "\u2756" + " Machine Learning Engineer";
  return (
    <div>
      <Head>
        <title>Barun Das | Homepage</title>
        <meta name="description" content="Barun Das' personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" text-lime-100">
        <section className="main-bg">
          <Header />
          <div className=" mt-6 relative mx-auto bg-gradient-to-b from-current w-80 rounded-full overflow-hidden">
            <Image src={avatar} />
          </div>
          <div className=" text-gray-500 text-center p-5 font-mono dark:text-lime-100">
            <h2
              data-value="BARUN DAS"
              className=" text-5xl"
              onMouseOver={(e) => hackerize(e)}
            >
              BARUN DAS
            </h2>
            <h3
              className=" text-2xl p-4 text-center font-medium"
              data-value="Software Engineer"
              onMouseOver={(e) => hackerize(e, 1)}
            >
              Software Engineer
            </h3>
            <LearnMore text="Learn More ->" />
            <p className=" py-5 text-2xl font-light leading-6 text-gray-400">
              Software developer and machine learning researcher, with a passion
              for designing scalable and efficient systems
            </p>
          </div>
          <div className=" text-2xl justify-center flex text-gray-700 gap-7 py-1 ">
            <a
              href=" mailto:barun.das.23@gmail.com"
              target=" _blank"
              className="hover:scale-125 transition-transform"
            >
              <AiFillMail />
            </a>
            <a
              href="https://www.linkedin.com/in/barun-das/"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="https://github.com/BarunKGP"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://medium.com/@barundas_79052"
              target="_blank"
              className="hover:scale-125 transition-transform"
            >
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
                  className=" shadow-sm ml-3 max-w-3 bg-gray-100 border border-gray-300 text-sm rounded-lg focus:border-primary-500 block w-1/4 p-2.5 dark:bg-gray-900 dark:placeholder-gray-400"
                  placeholder="Email"
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
                  className=" shadow-sm ml-3 max-w-3 bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-primary-500 block w-1/3 p-2.5 dark:bg-gray-900 dark:placeholder-gray-400"
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
                  className=" shadow-sm ml-3 bg-gray-100 border border-gray-300 text-sm rounded-lg focus:ring-4 focus:outline-none focus:ring-primary-500 block w-1/3 h-[200px] p-2.5 dark:bg-gray-900 dark:placeholder-gray-400"
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
