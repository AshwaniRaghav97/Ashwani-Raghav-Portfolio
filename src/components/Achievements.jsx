import { motion } from "framer-motion";
import { FaTrophy, FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";

const achievements = [
  {
    icon: <FaCode />,
    title: "350+ LeetCode Problems",
    description: "Solved 350+ coding problems using Java."
  },
  {
    icon: <FaLaptopCode />,
    title: "2 Full Stack Projects",
    description: "Developed complete MERN stack applications."
  },
  {
    icon: <FaGraduationCap />,
    title: "B.Tech CSE",
    description: "GLA University, Mathura (2023-2027)"
  },
  {
    icon: <FaTrophy />,
    title: "Continuous Learner",
    description: "Learning Full Stack Development & DSA every day."
  }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold text-center">
        My <span className="text-cyan-400">Achievements</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {achievements.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ y: -8 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center backdrop-blur-xl"
          >
            <div className="text-5xl text-cyan-400 flex justify-center">
              {item.icon}
            </div>

            <h3 className="text-2xl font-semibold mt-6">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-4">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}