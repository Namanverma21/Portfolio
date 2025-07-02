import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";

export default function Education() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const timeline = [
    {
      title: "B.Tech in Computer Science and Engineering",
      institute: "Gl Bajaj Institute of Technology And Management, Greater Noida",
      duration: "Sep 2022 – July 2026",
      result: "CGPA: 8.3",
      icon: <FiBookOpen className="text-teal-400 text-xl" />
    },
    {
      title: "Class XII (CBSE)",
      institute: "St. Joseph’s Sr. Sec. School, NTPC, Kanpur",
      duration: "Apr 2021 – Mar 2022",
      result: "Percentage: 79%",
      icon: <FiAward className="text-teal-400 text-xl" />
    },
    {
      title: "Class X (CBSE)",
      institute: "St. Joseph’s Sr. Sec. School, NTPC, Kanpur",
      duration: "Apr 2019 – Mar 2020",
      result: "Percentage: 83%",
      icon: <FiAward className="text-teal-400 text-xl" />
    }
  ];

  return (
    <motion.section
      id="education"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-800 to-gray-900 px-6 sm:px-12 lg:px-65 text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <motion.div variants={fadeIn} className="mb-12 md:mb-16">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-4">
          Education
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
      </motion.div>

      <div className="space-y-10 max-w-5xl mx-auto">
        {timeline.map((edu, index) => (
          <motion.div
            key={index}
            variants={fadeIn}
            className="bg-gray-800/70 border border-gray-700 p-8 rounded-xl hover:border-teal-400/50 transition-all shadow-md hover:shadow-teal-400/10"
          >
            <div className="flex items-center mb-4 space-x-4">
              <div className="p-3 bg-gray-700/50 rounded-full">
                {edu.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-100">{edu.title}</h3>
            </div>
            <p className="text-teal-400 text-lg font-medium">{edu.institute}</p>
            <p className="text-gray-400 text-sm">{edu.duration}</p>
            <p className="text-gray-300 text-base mt-3">{edu.result}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
