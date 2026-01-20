import {motion} from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const fadeInUp ={
    initial: {opacity:0, y:20} ,
    animate: {opacity:1, y:0},
    transition: {duration:0.6}
}

const staggerContainer ={
 animate: {
    transition: {staggerChildren: 0.1
           } 
    }
}
export const Navbar =() => {
    const [menuOpen, setMenuOpen] = useState(false);

    return <motion.nav 
    className="navbar" 
    initial={{y:-100, opacity:0}} 
    animate={{y:0, opacity:1}} 
    transition={{duration:0.6, ease: "easeOut"}}
    >

      <motion.div 
      className="logo" 
      whileHover={{scale:1.05}} 
      whileTap={{scale:0.95}}
      >
        Portfolio
        </motion.div> 
        <motion.ul 
        className="nav-links desktop" 
        variants={staggerContainer} 
        initial="initial"
        animate="animate"
        >
           
          <motion.li 
          variants={fadeInUp} 
          whileHover={{scale:1.1}} 
          whileTap={{scale:0.95}}>
            <a href="#home">Home</a>
            </motion.li>

             <motion.li 
             variants={fadeInUp}
             whileHover={{scale:1.1}} 
             whileTap={{scale:0.95}}
          >
            <a href="#skills">Skills</a>
            </motion.li>

             <motion.li 
             variants={fadeInUp}
             whileHover={{scale:1.1}} 
             whileTap={{scale:0.95}}
           >
            <a href="#projects">Projects</a>
            </motion.li>
             <motion.li 
             variants={fadeInUp}
             whileHover={{scale:1.1}} 
             whileTap={{scale:0.95}}
          >
            <a href="#contacts">Contact</a>
            </motion.li>
            </motion.ul>  


            {/* Mobile Menu Button */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Links (slide-in) */}
      {menuOpen && (
        <motion.ul
          className="nav-links mobile"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
        >
          <li onClick={() => setMenuOpen(false)}>
            <a href="#home">Home</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </motion.ul>
      )}
    </motion.nav>;
}