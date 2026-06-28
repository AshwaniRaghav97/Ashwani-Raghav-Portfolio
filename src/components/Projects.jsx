import { motion } from "framer-motion";
import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center"
      >
        My <span className="text-cyan-400">Projects</span>
      </motion.h2>

      <p className="text-center text-gray-400 mt-5 max-w-2xl mx-auto">
        These are some of my featured full stack projects built using
        React, Java, Node.js, Express and MongoDB.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 mt-16">

        {projects.map((project) => (

          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -8 }}
            transition={{ duration: .5 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-lg"
          >

            <img
              src={project.image}
              alt={project.title}
              onError={(e)=>{
                e.target.src="https://placehold.co/900x500/111827/ffffff?text=Project+Image";
              }}
              className="w-full h-60 object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl font-bold">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-6">

                {project.tech.map((tech)=>(
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-300 text-sm"
                  >
                    {tech}
                  </span>
                ))}

              </div>

              <div className="flex flex-wrap gap-4 mt-8">

                <a
                  href={project.github}
                  target="_blank"
                  className="flex items-center gap-2 bg-white/10 hover:bg-cyan-500 transition px-5 py-3 rounded-xl"
                >
                  <FaGithub />
                  GitHub
                </a>

                {/* <a
                  href={project.youtube}
                  target="_blank"
                  className="flex items-center gap-2 bg-red-600 hover:bg-red-700 transition px-5 py-3 rounded-xl"
                >
                  <FaYoutube />
                  Demo
                </a> */}

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700 transition px-5 py-3 rounded-xl"
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

export default Projects;