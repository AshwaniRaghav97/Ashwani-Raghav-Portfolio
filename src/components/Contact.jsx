import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import contact from "../data/contact";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-5xl font-bold text-center"
      >
        Contact <span className="text-cyan-400">Me</span>
      </motion.h2>

      <div className="grid lg:grid-cols-2 gap-10 mt-16">

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-3xl font-bold mb-6">
            Let's Connect 👋
          </h3>

          <div className="space-y-5">

            <a
              href={`tel:${contact.phone}`}
              className="flex items-center gap-4 hover:text-cyan-400"
            >
              <FaPhoneAlt />
              {contact.phone}
            </a>

            <a
              href={`mailto:${contact.email}`}
              className="flex items-center gap-4 hover:text-cyan-400"
            >
              <FaEnvelope />
              {contact.email}
            </a>

            <a
              href={`https://wa.me/${contact.whatsapp}`}
              target="_blank"
              className="flex items-center gap-4 hover:text-green-400"
            >
              <FaWhatsapp />
              WhatsApp
            </a>

            <a
              href={contact.resume}
              download
              className="flex items-center gap-4 hover:text-cyan-400"
            >
              <FaDownload />
              Download Resume
            </a>

          </div>

          <div className="flex gap-6 text-3xl mt-10">

            <a href={contact.social.github} target="_blank">
              <FaGithub />
            </a>

            <a href={contact.social.linkedin} target="_blank">
              <FaLinkedin />
            </a>

            <a href={contact.social.leetcode} target="_blank">
              <SiLeetcode />
            </a>

            <a href={contact.social.hackerrank} target="_blank">
              <SiHackerrank />
            </a>

            <a href={contact.social.instagram} target="_blank">
              <FaInstagram />
            </a>

          </div>

        </div>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8">

          <h3 className="text-3xl font-bold mb-6">
            Quick Message
          </h3>

          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black/30 p-4 rounded-xl outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black/30 p-4 rounded-xl outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full bg-black/30 p-4 rounded-xl outline-none"
            />

            <button
              type="submit"
              className="bg-cyan-500 hover:bg-cyan-600 px-8 py-4 rounded-xl font-semibold"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}