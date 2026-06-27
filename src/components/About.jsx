import { motion } from "framer-motion";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiMysql } from "react-icons/si";

const tech = [
  { icon: <FaJava />, name: "Java" },
  { icon: <FaReact />, name: "React" },
  { icon: <FaNodeJs />, name: "Node.js" },
  { icon: <SiMongodb />, name: "MongoDB" },
  { icon: <SiMysql />, name: "MySQL" },
];

const stats = [
  { value: "350+", label: "LeetCode Problems" },
  { value: "7.1", label: "CGPA" },
  { value: "8+", label: "Certificates" },
  { value: "2027", label: "Graduation" },
];

function About() {
  return (
    <section
      id="about"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-5xl font-bold text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-5 max-w-3xl mx-auto">
          Passionate Full Stack Developer and Java DSA Enthusiast currently
          pursuing B.Tech in Computer Science at GLA University. I enjoy
          building scalable web applications, solving challenging coding
          problems and continuously learning new technologies.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-10 mt-16">

        {/* Left Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            Quick Info
          </h3>

          <div className="space-y-4 text-lg">

            <div className="flex justify-between">
              <span>Name</span>
              <span className="font-semibold">Ashwani Raghav</span>
            </div>

            <div className="flex justify-between">
              <span>Degree</span>
              <span>B.Tech CSE</span>
            </div>

            <div className="flex justify-between">
              <span>University</span>
              <span>GLA University</span>
            </div>

            <div className="flex justify-between">
              <span>Passing Year</span>
              <span>2027</span>
            </div>

            <div className="flex justify-between">
              <span>CGPA</span>
              <span>7.1</span>
            </div>

            <div className="flex justify-between">
              <span>Status</span>
              <span className="text-green-400">
                Open for Internship
              </span>
            </div>

          </div>

        </motion.div>

        {/* Right Card */}
        <motion.div
          whileHover={{ y: -8 }}
          className="rounded-3xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8"
        >
          <h3 className="text-3xl font-bold text-cyan-400 mb-6">
            Tech Stack
          </h3>

          <div className="grid grid-cols-2 gap-5">

            {tech.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-[#111827] p-5 flex items-center gap-4 hover:bg-cyan-500 hover:text-black transition-all duration-300"
              >
                <div className="text-3xl">{item.icon}</div>
                <h4 className="font-semibold">{item.name}</h4>
              </div>
            ))}

          </div>

        </motion.div>

      </div>

      {/* Stats */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">

        {stats.map((item) => (
          <motion.div
            key={item.label}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-xl p-8 text-center"
          >
            <h3 className="text-4xl font-bold text-cyan-400">
              {item.value}
            </h3>

            <p className="text-gray-400 mt-3">
              {item.label}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}

export default About;