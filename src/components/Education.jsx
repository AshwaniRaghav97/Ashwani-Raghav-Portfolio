import { motion } from "framer-motion";

const education = [
  {
    year: "2023 - 2027",
    title: "B.Tech - Computer Science & Engineering",
    place: "GLA University, Mathura",
    score: "CGPA : 7.1"
  },
  {
    year: "2022",
    title: "Class 12",
    place: "UP Board",
    score: "56%"
  },
  {
    year: "2020",
    title: "Class 10",
    place: "UP Board",
    score: "62%"
  }
];

export default function Education() {
  return (
    <section id="education" className="max-w-6xl mx-auto py-24 px-6">

      <h2 className="text-5xl font-bold text-center">
        Education <span className="text-cyan-400">Timeline</span>
      </h2>

      <div className="relative mt-20 border-l-2 border-cyan-500">

        {education.map((item) => (

          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .5 }}
            className="ml-8 mb-16 relative"
          >

            <span className="absolute -left-11 top-1 w-6 h-6 rounded-full bg-cyan-500"/>

            <h3 className="text-2xl font-bold">

              {item.title}

            </h3>

            <p className="text-cyan-400 mt-2">

              {item.place}

            </p>

            <p className="text-gray-400 mt-2">

              {item.year}

            </p>

            <p className="mt-2">

              {item.score}

            </p>

          </motion.div>

        ))}

      </div>

    </section>
  );
}