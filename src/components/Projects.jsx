import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto py-24 px-6">

      <h2 className="text-5xl font-bold text-center">
        Featured <span className="text-cyan-400">Projects</span>
      </h2>

      <p className="text-center text-gray-400 mt-5">
        Some of my best full-stack development projects.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 mt-20">

        {projects.map((project) => (

          <motion.div
            key={project.id}
            whileHover={{ y: -8 }}
            transition={{ duration: .3 }}
            className="overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
          >

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover hover:scale-110 transition duration-700"
              />

            </div>

            {/* Content */}

            <div className="p-8">

              <h3 className="text-3xl font-bold">

                {project.title}

              </h3>

              <p className="text-gray-400 mt-5 leading-7">

                {project.description}

              </p>

              {/* Tech */}

              <div className="flex flex-wrap gap-3 mt-6">

                {project.tech.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300"
                  >
                    {tech}
                  </span>

                ))}

              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-5 py-3 rounded-xl transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                {/* <a
                  href={project.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 px-5 py-3 rounded-xl transition"
                >
                  <FaYoutube />
                  Demo
                </a> */}

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 px-5 py-3 rounded-xl transition"
                >
                  <FaExternalLinkAlt />
                  Live
                </a>

              </div>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
}