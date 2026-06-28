import { motion } from "framer-motion";
import certificates from "../data/certificates";

function Certificates() {
  return (
    <section
      id="certificates"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center"
      >
        My <span className="text-cyan-400">Certificates</span>
      </motion.h2>

      <p className="text-center text-gray-400 mt-5">
        Certifications achieved during my learning journey.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {certificates.map((certificate) => (
          <motion.a
            key={certificate.id}
            href={certificate.image}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            className="overflow-hidden rounded-2xl bg-white/5 border border-white/10"
          >
            <img
              src={certificate.image}
              alt={certificate.title}
              className="w-full h-56 object-cover"
            />

            <div className="p-5">
              <h3 className="text-lg font-semibold text-center">
                {certificate.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}

export default Certificates;