import { motion } from "framer-motion";
import {
  FiCpu,
  FiBook,
  FiDatabase,
  FiLayers,
  FiServer,
} from "react-icons/fi";

export default function About() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const skills = [
    {
      name: "Full-Stack Development",
      icon: <FiLayers className="text-teal-400 text-xl" />,
      items: ["React", "Node.js", "Express", "MongoDB"]
    },
    {
      name: "Machine Learning",
      icon: <FiCpu className="text-teal-400 text-xl" />,
      items: ["TensorFlow", "PyTorch", "CNN"]
    },
    {
      name: "Data Structures & Algorithms",
      icon: <FiDatabase className="text-teal-400 text-xl" />,
      items: ["Problem Solving", "Optimization"]
    },
    {
      name: "CS Fundamentals",
      icon: <FiServer className="text-teal-400 text-xl" />,
      items: ["Computer Networks", "Operating System", "DBMS","OOPS"]
    },
    {
      name: "Continuous Learning",
      icon: <FiBook className="text-teal-400 text-xl" />,
      items: ["Research", "Technical Blogs"]
    }
  ];

  return (
    <motion.section
      id="about"
      className="py-20 md:py-28 bg-gradient-to-b from-gray-900 to-gray-800 px-6 sm:px-12 lg:px-24 text-gray-300 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-teal-400 filter blur-[100px]"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-cyan-500 filter blur-[120px]"
          animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div variants={fadeIn} className="mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-500 rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
{/* Introduction */}
<motion.div variants={fadeIn} className="space-y-8">
  <div className="space-y-6">
    <h3 className="text-3xl md:text-4xl font-semibold text-gray-100">
      Hi, I'm <span className="text-teal-400">Naman Verma</span>
    </h3>

    <p className="text-xl leading-relaxed font-light">
      A final-year Computer Science undergraduate at GL Bajaj Institute of Technology And Management, Greater Noida, I'm deeply curious about how technology solves real problems. I love <span className="text-teal-400 font-medium">problem-solving</span> and consistently improve through coding, building, and collaborating.
    </p>

    <p className="text-xl leading-relaxed font-light">
      Proficient in <span className="text-teal-400 font-medium">MERN stack development</span> and <span className="text-teal-400 font-medium">machine learning</span>, I build full-stack apps, train intelligent models, and enjoy exploring new tech. Whether it’s frontend finesse or backend logic, I bring precision, performance, and a love for clean, scalable code.
    </p>

    <div className="pt-4">
      <h4 className="text-xl font-semibold text-gray-100 mb-3">Currently focusing on:</h4>
      <ul className="space-y-2">
        <li className="flex items-start">
          <span className="text-teal-400 mr-2 mt-1">▹</span>
          <span>Building <span className="text-teal-400">production-ready full-stack apps</span> using React and Node.js</span>
        </li>
        <li className="flex items-start">
          <span className="text-teal-400 mr-2 mt-1">▹</span>
          <span>Training and deploying <span className="text-teal-400">deep learning models</span> for real-world applications</span>
        </li>
      </ul>
    </div>
  </div>
</motion.div>

          {/* Skills */}
          <motion.div variants={fadeIn} className="space-y-8">
            <h3 className="text-3xl font-semibold text-gray-100">My Expertise</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  whileHover={{ y: -4 }}
                  className="bg-gray-800/50 p-5 rounded-lg border border-gray-700 hover:border-teal-400/30 transition-all hover:shadow-lg hover:shadow-teal-400/10"
                >
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="p-2 rounded-md bg-gray-700/50">
                      {skill.icon}
                    </div>
                    <h4 className="text-lg font-medium">{skill.name}</h4>
                  </div>
                  <ul className="space-y-1.5 pl-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="flex items-center text-base font-light text-gray-300">
                        <span className="text-teal-400 mr-2 text-xs">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
