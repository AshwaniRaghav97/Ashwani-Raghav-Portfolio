import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaArrowUp,
} from "react-icons/fa";

import { SiLeetcode, SiHackerrank } from "react-icons/si";

function Footer() {
  return (
    <>
      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="fixed bottom-8 right-8 w-14 h-14 rounded-full bg-cyan-500 hover:bg-cyan-600 shadow-lg flex items-center justify-center text-xl z-50"
      >
        <FaArrowUp />
      </button>

      <footer className="border-t border-white/10 mt-24">

        <div className="max-w-7xl mx-auto py-12 px-6">

          <h2 className="text-4xl font-bold text-center">
            Ashwani
            <span className="text-cyan-400">.</span>
          </h2>

          <p className="text-center text-gray-400 mt-5">
            Full Stack Developer • Java Developer • DSA Enthusiast
          </p>

          <div className="flex justify-center gap-7 mt-8 text-3xl">

            <a
              href="https://github.com/AshwaniRaghav97"
              target="_blank"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/ashwani-raghav-67b9532a2/"
              target="_blank"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://leetcode.com/u/AshwaniRaghav/"
              target="_blank"
            >
              <SiLeetcode />
            </a>

            <a
              href="https://www.hackerrank.com/profile/raghavashwani0"
              target="_blank"
            >
              <SiHackerrank />
            </a>

            <a
              href="https://www.instagram.com/ashishraghav97/"
              target="_blank"
            >
              <FaInstagram />
            </a>

          </div>

          <p className="text-center text-gray-500 mt-10">

            © {new Date().getFullYear()} Ashwani Raghav

          </p>

        </div>

      </footer>

    </>
  );
}

export default Footer;