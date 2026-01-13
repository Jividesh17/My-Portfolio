import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Hero = () =>{
  return (
    <motion.section className="relative min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden px-6 py-20">
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/30 via-pink-500/20 to-blue-500/30 blur-3xl opacity-40 animate-pulse pointer-events-none"></div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg mb-4"
      >
        Hi, I'm{" "}
        <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-blue-400 text-transparent bg-clip-text animate-gradient-x">
          Jividesh
        </span>
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
        className="mt-2 text-xl md:text-2xl text-gray-300 font-mono mb-8"
      >
        <span className="border-r-2 border-purple-400 pr-1 animate-pulse">
          Frontend Developer 🚀
        </span>
      </motion.p>

      {/* Social Icons */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="flex gap-8 mt-4 text-3xl"
      >
        <a
          href="https://github.com/Jividesh17"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub className="hover:fill-white" />
        </a>
        <a
          href="www.linkedin.com/in/jividesh-r-b1b12b1b8"
          target="_blank"
          rel="noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors"
        >
          <FaLinkedin className="hover:fill-blue-500" />
        </a>
      </motion.div>

      {/* About + Code */}
      <div className="mt-16 max-w-3xl w-full flex flex-col items-center gap-8">
        
        {/* About Me */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-gray-300 text-lg leading-relaxed text-center px-4"
        >
          Front-End Developer with 4 years of professional experience building scalable,
          high-performance and interactive UI/UX web applications.
          creating seamless user experiences that make a difference.
          Passionate about writing clean, maintainable code and 
           continuously upskilling in backend technologies and AI-driven applications to grow as a 
           full-stack engineer.
        </motion.div>

        {/* Code Block */}
        <motion.pre
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.3, delay: 1.4 }}
          className="text-left text-sm sm:text-base bg-[#1e1e1e] text-gray-200 font-mono p-6 rounded-lg shadow-xl border border-gray-700 w-full max-w-xl overflow-x-auto"
        >
          <code>
            <span className="text-purple-400">const</span>{" "}
            <span className="text-blue-400">developer</span>{" "}
            <span className="text-pink-400">=</span> {"{"}
            {"\n"}
            &nbsp;&nbsp;<span className="text-green-400">name</span>
            : <span className="text-yellow-300">"Jividesh"</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">role</span>
            : <span className="text-yellow-300">"Frontend Developer"</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">stack</span>
            : [<span className="text-yellow-300">"React"</span>,{" "}
            <span className="text-yellow-300">"JavaScript"</span>,{" "}
            <span className="text-yellow-300">"TailwindCSS"</span>,{" "}
            <span className="text-yellow-300">"Git"</span>],{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">location</span>
            : <span className="text-yellow-300">"India"</span>,{"\n"}
            &nbsp;&nbsp;<span className="text-green-400">contact</span>
            : <span className="text-yellow-300">"jividesh7@gmail.com"</span>
            {"\n"}
            {"};"}
          </code>
        </motion.pre>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 1 }}
          className="flex flex-wrap gap-6 justify-center mt-6"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg hover:shadow-purple-500/50 transition transform hover:scale-105"
          >
            View My Projects
          </a>
          <a
            href="/Jividesh R - Resume.docx"
            download
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg hover:shadow-cyan-400/50 transition transform hover:scale-105"
          >
            Download Resume
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 flex flex-col items-center text-gray-400"
      >
        <div className="w-[2px] h-12 bg-gradient-to-b from-gray-400 to-transparent animate-bounce"></div>
        <span className="text-xs mt-2">Scroll Down</span>
      </motion.div>
    </motion.section>
  );
}


