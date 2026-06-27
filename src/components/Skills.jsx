import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  SiExpress,
} from "react-icons/si";

import { motion } from "framer-motion";

const skills = [
  { name: "Java", icon: <FaJava />, color: "text-orange-500" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
  { name: "React", icon: <FaReact />, color: "text-cyan-400" },
  { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
  { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
  { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
  { name: "HTML5", icon: <SiHtml5 />, color: "text-orange-600" },
  { name: "CSS3", icon: <SiCss3 />, color: "text-blue-400" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
  { name: "Git", icon: <FaGitAlt />, color: "text-red-500" },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center"
      >
        My <span className="text-cyan-400">Skills</span>
      </motion.h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">

        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 text-center transition-all"
          >
            <div className={`text-6xl ${skill.color}`}>
              {skill.icon}
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              {skill.name}
            </h3>
          </motion.div>
        ))}

      </div>
    </section>
  );
}