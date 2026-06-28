import Marquee from "react-fast-marquee";

const tech = [
  "Java",
  "Spring Boot",
  "React",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Tailwind CSS",
  "Git",
  "GitHub",
  "REST API",
  "DSA",
  "LeetCode",
];

export default function TechMarquee() {
  return (
    <div className="py-6 border-y border-white/10 bg-white/5 backdrop-blur-lg">
      <Marquee speed={60} gradient={false}>
        {tech.map((item, index) => (
          <div
            key={index}
            className="mx-6 px-6 py-3 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold"
          >
            {item}
          </div>
        ))}
      </Marquee>
    </div>
  );
}