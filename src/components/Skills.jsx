import { motion, useMotionValue, useSpring, useTransform, useInView, useMotionValueEvent } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const skills = [
  { name: "React", level: 90, icon: <FaReact className="text-blue-500" /> },
  { name: "JavaScript", level: 85, icon: <FaJs className="text-yellow-400" /> },
  { name: "HTML", level: 95, icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", level: 90, icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind CSS", level: 80, icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "Git", level: 75, icon: <FaGitAlt className="text-red-500" /> },
];

// ✅ A helper component for each skill
const SkillCircle = ({ skill, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Motion values
  const progress = useMotionValue(0);
  const spring = useSpring(progress, { duration: 2000 });
  const rounded = useTransform(spring, (latest) => Math.round(latest));

  // React state for rendering number safely
  const [percent, setPercent] = useState(0);

  useMotionValueEvent(rounded, "change", (latest) => {
    setPercent(latest);
  });

  useEffect(() => {
    if (isInView) {
      progress.set(skill.level);
    }
  }, [isInView, progress, skill.level]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center pb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
    >
      {/* Circular Progress */}
      <div className="relative w-28 h-28">
        <svg className="w-full h-full transform -rotate-90">
          {/* Background Circle */}
          <circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="var(--card-border)"
            strokeWidth="8"
            fill="transparent"
          />
          {/* Foreground Progress */}
          <motion.circle
            cx="50%"
            cy="50%"
            r="45%"
            stroke="url(#skill-gradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={283}
            strokeDashoffset={283 - (283 * skill.level) / 100}
            strokeLinecap="round"
            initial={{ strokeDashoffset: 283 }}
            animate={{
              strokeDashoffset: 283 - (283 * skill.level) / 100,
            }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />
          {/* Gradient */}
          <defs>
            <linearGradient id="skill-gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--gradient-start)" />
              <stop offset="100%" stopColor="var(--gradient-end)" />
            </linearGradient>
          </defs>
        </svg>
        {/* Percentage */}
        <span className="absolute inset-0 flex items-center justify-center font-bold text-lg">
          {percent}%
        </span>
      </div>

      {/* Icon & Label */}
      <div className="mt-4 flex flex-col items-center">
        <span className="text-3xl">{skill.icon}</span>
        <p className="mt-3 text-sm">{skill.name}</p>
      </div>
    </motion.div>
  );
};

export const Skills = () => {
  return (
    <section
      id="skills"
      className="skills min-h-screen flex flex-col items-center justify-center py-16 bg-[var(--section-bg-alt)] text-[var(--text-color)]"
   >
      <div className="max-w-5xl mx-auto px-6 w-full">
        {/* Centered Title */}
        <h2 className="text-3xl font-bold text-center mb-12">My Skills</h2>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
                gap-x-12 gap-y-20 justify-items-center">
          {skills.map((skill, index) => (
            <SkillCircle key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
