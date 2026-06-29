import { portfolio } from "../data/portfolio";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Background from "./Background";
import SocialIcons from "./SocialIcons";
import FloatingIcons from "./FloatingIcons";

function Hero() {
  return (
    <>
      <Background />

      <section
        id="home"
        className="min-h-screen flex items-center justify-center px-6 pt-24"
      >
        <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cyan-400 text-xl mb-4">
              👋 Hello, I'm
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              {portfolio.name}
            </h1>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1800,
                "Java Developer",
                1800,
                "DSA Enthusiast",
                1800,
                "Problem Solver",
                1800,
              ]}
              wrapper="h2"
              repeat={Infinity}
              className="text-3xl md:text-4xl text-cyan-400 font-bold mt-6"
            />

            <p className="text-gray-400 mt-8 leading-8 text-lg max-w-xl">
              Passionate Full Stack Developer specializing in Java,
              React, Node.js and MongoDB.
              Solved <span className="text-cyan-400">350+ LeetCode Problems</span>
              and building scalable web applications.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-5 mt-10">

              <a
                href={portfolio.resume}
                download
                className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold transition"
              >
                📄 Resume
              </a>

              <button
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="border border-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-xl transition"
              >
                🚀 Projects
              </button>

              <a
                href={`https://wa.me/${portfolio.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="border border-green-500 text-green-400 hover:bg-green-500/10 px-8 py-4 rounded-xl transition"
              >
                💬 WhatsApp
              </a>

            </div>

            <div className="mt-10">
              <SocialIcons />
            </div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >

            <div className="absolute w-72 h-72 bg-cyan-500 blur-[120px] opacity-30 rounded-full"></div>

            <motion.img
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              src={portfolio.profile}
              className="relative w-80 h-80 rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_70px_#06b6d4]"
            />

            <FloatingIcons />
            </motion.div>
          

        </div>
      </section>
    </>
  );
}

export default Hero;