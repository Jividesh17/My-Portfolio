import {motion} from 'framer-motion'

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

export const Projects =() => {
    return <motion.section 
    id="projects" 
    className='projects'
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    viewport={{once:true}}
    transition={{duration: 0.6}} 
    >
        <motion.h2 
        variants={fadeInUp} 
        initial="initial" 
        whileInView="animate"
        viewport={{once:true}}
        className='font-bold'
        >
            My Projects
            
            </motion.h2>
            <motion.div 
            className='project-grid'
            variants={{staggerContainer}}
            whileInView="animate"
            viewport={{once:true}}
        >
            <motion.a
             href="https://gaming-animation-website.netlify.app/"
            target="_blank"
              rel="noopener noreferrer"
            className='project-card' 
            variants={{fadeInUp}} 
            whileHover={{y: -10, transition:{duration: 0.2}}}
            >
            
          <motion.div 
          className='project-image' 
          style={{backgroundImage:"url('/projects/Animation-project.png')"}}
          whileHover={{scale:1.05, transition:{duration: 0.2 }}}
          />
            <h3>Animation Gaming Website</h3>
            <p> 
                An interactive gaming website featuring cinematic video transitions,
  smooth animations and interactive transitions modern user experience.
            </p>
            <div className="project-tech">
            <span>React</span>
            <span>GSAP</span>
            <span>Framer Motion</span>
            <span>TailwindCSS</span>
          </div>

            </motion.a>

             <motion.a
            href="https://admin-dashboard-kanban-chart.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className='project-card' 
            variants={{fadeInUp}} 
            whileHover={{y: -10, transition:{duration: 0.2}}}
            >
            
          <motion.div 
          className='project-image' 
          style={{backgroundImage:"url('/projects/Dashboard-project.png')"}}
          whileHover={{scale:1.05, transition:{duration: 0.2 }}}
          />
            <h3>Admin Dashboard</h3>
            <p> 
              A responsive admin dashboard and ecommerce analytics application
  featuring interactive Syncfusion charts, real-time data visualization,Context API
  for scalable state management and dark/light mode support. 
            </p>
            <div className="project-tech">
            <span>React</span>
            <span>Syncfusion</span>
            <span>TailwindCSS</span>
          </div>

            </motion.a>

             {/* <motion.div 
            className='project-card' 
            variants={{fadeInUp}} 
            whileHover={{y: -10, transition:{duration: 0.2}}}
            >
            
          <motion.div 
          className='project-image' 
          style={{backgroundImage:"url('/projects/stopwatch.png')"}}
          whileHover={{scale:1.05, transition:{duration: 0.2 }}}
          />
            <h3>Productivity Timer</h3>
            <p> 
                A sleek productivity timer application with customizable work
            sessions, statistics tracking, and dark mode support.
            </p>
            <div className="project-tech">
            <span>React</span>
            <span>Typescript</span>
            <span>TailwindCSS</span>
          </div>

            </motion.div> */}
            
            </motion.div>
            

    </motion.section>;
}