import { motion } from "framer-motion";
import { FiMail, FiPhone, FiDownload } from "react-icons/fi";

export default function ContactMe() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-20 md:py-24 bg-gradient-to-b from-gray-800 to-gray-900 px-6 sm:px-12 lg:px-32 text-gray-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
    >
      <div className="max-w-5xl mx-auto text-center space-y-10">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500"
          variants={fadeIn}
        >
          Get in Touch
        </motion.h2>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-16 text-lg sm:text-xl font-light"
          variants={fadeIn}
        >
          <div className="flex items-center space-x-3">
            <FiMail className="text-teal-400 text-2xl" />
            <a href="mailto:gvanshika528@gmail.com" className="hover:text-teal-400">
              ramnaman3957@gmail.com
            </a>
          </div>

          <div className="flex items-center space-x-3">
            <FiPhone className="text-teal-400 text-2xl" />
            <span className="hover:text-teal-400">+91-8954151408</span>
          </div>

          <div className="flex items-center space-x-3">
            <FiDownload className="text-teal-400 text-2xl" />
            <a
              href="/resume.pdf" 
              download
              className="hover:text-teal-400"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
