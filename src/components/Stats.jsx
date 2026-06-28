import { motion } from "framer-motion";

const stats = [
  {
    number: "350+",
    title: "LeetCode Problems",
  },
  {
    number: "2+",
    title: "Full Stack Projects",
  },
  {
    number: "7.1",
    title: "Current CGPA",
  },
  {
    number: "2027",
    title: "Graduation Year",
  },
];

export default function Stats() {
  return (
    <section className="max-w-7xl mx-auto py-20 px-6">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((item) => (
          <motion.div
            key={item.title}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 text-center"
          >
            <h2 className="text-5xl font-bold text-cyan-400">
              {item.number}
            </h2>

            <p className="mt-4 text-gray-300 text-lg">
              {item.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}