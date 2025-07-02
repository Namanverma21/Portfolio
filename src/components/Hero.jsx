import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiArrowDown } from "react-icons/fi";

export default function Hero() {
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
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 sm:px-8 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-teal-500 filter blur-[100px] opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-cyan-500 filter blur-[120px] opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={item}>
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500 mb-6">
            Naman Verma
          </h1>
        </motion.div>

        <motion.div variants={item}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-300 mb-6">
            Full-Stack Developer & Machine Learning Enthusiast
          </h2>
        </motion.div>

        <motion.p
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed"
          variants={item}
        >
          Building innovative solutions at the intersection of technology and creativity, with a passion for elegant code and impactful products.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-16"
          variants={item}
        >
          <a
            href="https://github.com/NamanVerma21/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-teal-400/30 text-white transition-all group"
          >
            <FiGithub className="mr-3 group-hover:text-teal-400 transition-colors" />
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/naman-verma-ba679b245/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 border border-gray-700 hover:border-teal-400/30 text-white transition-all group"
          >
            <FiLinkedin className="mr-3 group-hover:text-teal-400 transition-colors" />
            LinkedIn
          </a>
        </motion.div>

        <motion.div
          variants={item}
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
        >
          <a href="#about" className="text-gray-400 hover:text-teal-400 transition-colors">
            <FiArrowDown className="text-2xl animate-bounce" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}