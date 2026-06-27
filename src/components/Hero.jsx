import { portfolio } from "../data/portfolio";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Background from "./Background";
import SocialIcons from "./SocialIcons";

function Hero() {
  return (
    <>
      <Background />

      <section className="min-h-screen flex items-center justify-center px-6">

        <div className="text-center">

          <motion.img
            initial={{ scale: .8, opacity:0 }}
            animate={{ scale:1, opacity:1 }}
            transition={{ duration:.8 }}
            src={portfolio.profile}
            className="w-56 h-56 rounded-full border-4 border-cyan-400 object-cover mx-auto shadow-[0_0_60px_#06b6d4]"
          />

          <motion.h1
            initial={{ y:40, opacity:0 }}
            animate={{ y:0, opacity:1 }}
            transition={{ delay:.3 }}
            className="text-6xl font-bold mt-10"
          >
            {portfolio.name}
          </motion.h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1500,
              "Java Developer",
              1500,
              "DSA Enthusiast",
              1500,
              "Problem Solver",
              1500,
            ]}
            wrapper="h2"
            repeat={Infinity}
            className="text-3xl text-cyan-400 font-semibold mt-5"
          />

          <p className="text-gray-400 max-w-2xl mx-auto mt-8 leading-8">

            Passionate Full Stack Developer specializing in Java,
            React, Node.js and scalable web applications.
            Solved 350+ LeetCode problems and continuously
            improving problem solving skills.

          </p>

          <div className="flex flex-wrap gap-5 justify-center mt-10">

            <a
              href={portfolio.resume}
              download
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold"
            >
              Download Resume
            </a>

            <a
              href={`https://wa.me/${portfolio.whatsapp}`}
              target="_blank"
              className="border border-cyan-500 px-8 py-4 rounded-xl"
            >
              WhatsApp
            </a>

          </div>

          <SocialIcons />

        </div>

      </section>
    </>
  );
}

export default Hero;