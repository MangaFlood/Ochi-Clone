import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Power4 } from 'gsap'

function Projects() {

  const [hovering, setHovering] = useState()

  return (
    <div  className='ProjectPage w-full py-20 bg-zinc-900'>
      <h1 className='text-7xl px-20 uppercase'>
        {"featured-projects:".split("").map((items, index)=>(
          <span key={index} className="inline-block text-7xl text-white">{items}</span>
        ))}
      </h1>
      <div className='ProjectSection border-t-2 py-5 border-zinc-100 text-zinc-900 mt-16'>
        <div className='projectHolder px-20 w-full flex gap-10 pt-10 relative text-[7vw] text-yellow-300'>
          <h1 className='font-["Masker"] absolute overflow-hidden flex uppercase left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] text-nowrap'>
            {"cardboard-spaceship".split("").map((items, index)=>(
              <motion.span initial={{y: "100%"}} animate={hovering ? {y: "0"} : {y: "100%"}} transition={{ease: Power4.easeInOut, delay: index*.03, }} key={index} className="inline-block text-9xl">{items}</motion.span>
            ))}
          </h1>
          <div onMouseEnter = {()=> setHovering(true)} onMouseLeave={()=> setHovering(false)} className='cardContainer w-1/2 h-[37vw] rounded-3xl bg-yellow-100'>
            <div className='cards w-full h-full rounded-3xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
            </div>
          </div>
          <div className='cardContainer w-1/2 h-[37vw] rounded-3xl bg-yellow-100'>
            <div className='cards w-full h-full rounded-3xl overflow-hidden'>
              <img className='w-full h-full bg-cover' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects;