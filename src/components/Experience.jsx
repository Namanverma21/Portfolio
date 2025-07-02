import { motion } from "framer-motion";

const experiences = [
  {
    company: "Slayd Technologies Private Limited, Gurgaon",
    duration: "May 2025 – Present",
    highlights: [
      "Built 20+ responsive UI components using React.js, improving development speed by 30%.",
      "Delivered 10+ dynamic frontend features in Agile sprints with 100% on-time completion.",
      "Enhanced performance by 25% via asset load optimization and bundle reduction.",
      "Unified design branding across 3 web apps and 3+ platforms to boost consistency."
    ],
    color: "bg-purple-500"
  },
  {
    company: "GAIL (India) Limited, Pata",
    duration: "June 2024 – July 2024",
    highlights: [
      "Digitized manual consumables management via a centralized portal, boosting efficiency by 25%.",
      "Automated workflows saved 40+ hours/month by eliminating manual tracking.",
      "Optimized backend queries to enhance speed by 30% and reduce delays.",
      "Redesigned operations to reduce entry errors, improving accuracy by 15%."
    ],
    color: "bg-teal-500"
  }
];

export default function Experience() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-4">
            Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-12"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="relative rounded-xl bg-gray-800 border border-gray-700 p-6 hover:border-teal-400/30 transition-all"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${exp.color}`}></div>
              <h3 className="text-2xl font-semibold text-white mb-1">{exp.company}</h3>
              <p className="text-sm text-gray-400 mb-4">{exp.duration}</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {exp.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
