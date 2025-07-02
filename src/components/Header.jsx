import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode, SiCodechef } from "react-icons/si"; // LeetCode & CodeChef icons

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" }, // newly added
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "mailto:ramnaman3957@gmail.com" },
  ];

  const socialItems = [
    { icon: <FiGithub />, href: "https://github.com/NamanVerma21/" },
    { icon: <SiLeetcode />, href: "https://leetcode.com/u/ramnaman39/" },
    { icon: <FiLinkedin />, href: "https://www.linkedin.com/in/naman-verma-ba679b245/" },
    { icon: <FiMail />, href: "mailto:ramnaman3957@gmail.com" }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 inset-x-0 bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-800/50 w-full"
    >
      <div className="w-full px-3 sm:px-4 md:px-6 py-5">
        <div className="flex justify-between items-center max-w-full mx-2">
          {/* Logo/Name */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="flex items-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-500">
              Naman Verma
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-gray-300 hover:text-teal-400 relative group"
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-teal-400 group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            ))}

            <div className="flex space-x-4 ml-4">
              {socialItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl text-gray-400 hover:text-teal-400 p-2 rounded-full hover:bg-gray-800"
                  whileHover={{ y: -2, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-2xl text-gray-300 p-2 rounded-full hover:bg-gray-800"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg overflow-hidden w-full"
        >
          <div className="px-4 py-4 space-y-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block text-xl font-medium text-gray-300 hover:text-teal-400 py-3"
                onClick={() => setMobileMenuOpen(false)}
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.name}
              </motion.a>
            ))}
            <div className="flex space-x-6 pt-4">
              {socialItems.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-gray-400 hover:text-teal-400"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
