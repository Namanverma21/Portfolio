import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const projects = [
  {
    title: "Briefly",
    description:
      "Built a modern, user-friendly web app that generates concise summaries from article URLs using AI. Integrated local history with persistent storage, copy-to-clipboard for easy sharing, and optimized API handling with Redux Toolkit Query for scalability and performance.",
    tech: ["React", "Redux Toolkit (RTK Query)", "JavaScript", "RapidAPI", "Tailwind CSS", "LocalStorage"],
    link: "https://github.com/Namanverma21/Article-Summarizer",
    accentColor: "bg-teal-500"
  },
  {
    title: "DeliverAtDoor",
    description:
      "Built a MERN stack delivery system with multi-role login for customers, agents, and admins. Includes real-time order tracking, OpenStreetMap integration, and downloadable PDF receipts.",
    tech: ["MERN Stack", "Socket.io", "JWT", "PDF Renderer", "OpenStreetMap"],
    link: "https://github.com/Namanverma21/Delivery",
    accentColor: "bg-purple-500"
  },
  {
    title: "Resume Ranker",
    description:
      "Developed a C++ tool to rank resumes against job descriptions using keyword matching and synonym mapping. Built a simple web interface for file upload and real-time match scoring, with downloadable reports highlighting skill gaps and improvement suggestions.",
    tech: ["C++", "HTML", "CSS", "Javascript"],
    link: "https://github.com/Namanverma21/Resume_Ranker",
    accentColor: "bg-rose-500"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 sm:px-12 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-4">
            My Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl bg-gray-800 border border-gray-700 hover:border-teal-400/30 transition-all duration-300"
            >
              <div className={`absolute top-0 left-0 w-full h-1 ${project.accentColor}`}></div>

              <div className="p-6 h-full flex flex-col z-10 relative">
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-6 whitespace-pre-line">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs rounded-full bg-gray-700 text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* ✅ Clickable Link - FIXED */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-teal-400 hover:text-teal-300 transition-colors mt-auto"
                >
                  <FiGithub className="mr-2" />
                  View on GitHub
                  <FiExternalLink className="ml-2 text-sm" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/NamanVerma21/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 border border-gray-700 hover:bg-gray-700 hover:border-teal-400/30 text-white transition-all"
          >
            <FiGithub className="mr-3" />
            View All Projects
          </a>
        </motion.div>
      </div>
    </section>
  );
}
