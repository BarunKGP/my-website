import React from "react";
import Image from "next/image";
import {
  AiFillGithub,
  AiFillMediumCircle,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";
import avatar from "@/public/avatar.png";
import { Handjet } from "next/font/google";

const handjet = Handjet({
  weight: ["200", "300"],
  subsets: ["latin"],
  variable: "--font-handjet",
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function hackerize(event, iterSkip = 0.33) {
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

const HeroSection = () => {
  return (
    <div>
      <div className=" mt-20 relative mx-auto bg-gradient-to-b from-purple-800 to-lime-200 w-[350px] sm:w-[500px] rounded-full overflow-hidden">
        <Image src={avatar} alt="avatar image" />
      </div>
      <div
        className={`dark:text-lime-100 text-gray-800 text-center p-5 ${handjet.variable} font-handjet font-light`}
      >
        <h2
          data-value="BARUN DAS"
          className=" text-6xl bg-gradient-to-tr from-slate-900 via-lime-300 to-purple-700 inline-block text-transparent bg-clip-text"
          onMouseOver={(e) => hackerize(e, 1 / 2)}
        >
          BARUN DAS
        </h2>
        <br />
        <h3
          className=" text-2xl p-4 text-center font-medium  bg-gradient-to-tr from-slate-900 via-lime-200 to-purple-700 inline-block text-transparent bg-clip-text"
          data-value="Software Engineer"
          onMouseOver={(e) => hackerize(e, 1)}
        >
          Software Engineer
        </h3>
        {/* <p className=" py-5 text-3xl font-light leading-6 text-purple-950 dark:text-lime-100">
          Software developer and machine learning researcher, with a passion for
          designing scalable and efficient systems
        </p> */}
      </div>
      <div className=" text-2xl justify-center flex text-gray-700 dark:text-stone-200 gap-7 py-1 ">
        <a
          href="mailto:barun.das.23@gmail.com"
          target=" _blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform"
        >
          <AiFillMail />
        </a>
        <a
          href="https://www.linkedin.com/in/barun-das/"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/BarunKGP"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://medium.com/@barundas_79052"
          target="_blank"
          rel="noreferrer"
          className="hover:scale-125 transition-transform"
        >
          <AiFillMediumCircle />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
