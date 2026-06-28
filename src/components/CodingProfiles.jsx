import { motion } from "framer-motion";

export default function CodingProfiles() {
  return (
    <section
      id="coding"
      className="max-w-7xl mx-auto py-24 px-6"
    >
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold text-center"
      >
        Coding <span className="text-cyan-400">Profiles</span>
      </motion.h2>

      <p className="text-center text-gray-400 mt-5">
        My coding journey across different platforms.
      </p>

      <div className="grid lg:grid-cols-2 gap-10 mt-16">

        {/* GitHub Stats */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">
          <img
            src="https://github-readme-stats.vercel.app/api?username=AshwaniRaghav97&show_icons=true&theme=tokyonight&hide_border=true"
            alt="GitHub Stats"
            className="w-full"
          />

          <img
            className="mt-6 w-full"
            src="https://github-readme-streak-stats.herokuapp.com/?user=AshwaniRaghav97&theme=tokyonight&hide_border=true"
            alt="GitHub Streak"
          />
        </div>

        {/* LeetCode */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

          <img
            src="https://leetcard.jacoblin.cool/AshwaniRaghav?theme=dark&font=Karma"
            alt="LeetCode"
            className="w-full rounded-xl"
          />

        </div>

      </div>
    </section>
  );
}