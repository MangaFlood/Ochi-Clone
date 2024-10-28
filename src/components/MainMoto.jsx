import { motion } from 'framer-motion'
import React from 'react'

function MainMoto() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0.1" className='w-full bg-white py-40 rounded-3xl'>
      <div className='flex border-t-2 border-b-2 border-zinc-900 text-zinc-900 bg- whitespace-nowrap overflow-hidden'>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className='py-8 -mt-28 -mb-16 pr-14 text-[25vw] font-["Masker"] uppercase leading-none'>we are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className='py-8 -mt-28 -mb-16 pr-14 text-[25vw] font-["Masker"] uppercase leading-none'>we are ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{ repeat: Infinity, duration: 10, ease: "linear" }} className='py-8 -mt-28 -mb-16 pr-14 text-[25vw] font-["Masker"] uppercase leading-none'>we are ochi</motion.h1>
      </div>
    </div>
  )
}

export default MainMoto
