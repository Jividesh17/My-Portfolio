import { useEffect, useState } from 'react'
import './App.css'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import emailjs from "@emailjs/browser"
import {motion} from "framer-motion"
function App() {
  const[isLoaded, setIsLoaded]=useState(false);

  useEffect(()=>{
     emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    //  console.log("Public Key:", import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
     setIsLoaded(true)
  },[]);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
    <Navbar/>
<main className="pt-[80px]">
    <Hero/>
    <Skills/>
    <Projects/>
    <Contact/>
    </main>
    <motion.footer className='footer' 
    initial={{opacity: 0}} 
    whileInView={{opacity:1}}
    viewport={{once:true}}
    transition={{duration: 0.6}}
    >
    <p> &copy; Jividesh. All rights reserved.</p>
    </motion.footer>
    </div>
  )
}

export default App
