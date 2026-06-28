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
    <section className="overflow-hidden py-6 border-y border-white/10 bg-white/5">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...tech, ...tech].map((item, index) => (
          <span
            key={index}
            className="mx-4 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-semibold"
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}