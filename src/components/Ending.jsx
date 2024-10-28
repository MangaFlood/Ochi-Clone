import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

function Ending() {


        const [degree, setDeg] = useState(0)
    
        useEffect(()=>{
            window.addEventListener("mousemove", (e)=>{
                let mouseX = e.clientX;
                let mouseY = e.clientY;
    
                let deltaX = mouseX - window.innerWidth/2;
                let deltaY = mouseY - window.innerHeight/2;
    
                var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
                setDeg(angle - 180);
            })
        })

  return (
    <div className='w-full min-h-screen p-20 relative bg-yellow-300'>
        <div className='flex flex-col items-center absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
            {[
                "ready",
                "to start",
                "the project?"
            ].map((items, index)=>(
                <h1 className='font-["Masker"] text-zinc-800 text-[15vw] text-nowrap leading-[.77] uppercase'>{items}</h1>
            ))}
            <div className='flex gap-16 absolute left-1/2 top-[24vh] -translate-x-[50%] -translate-y-[50%] '>
                <div className='relative w-[10.5vw] h-[10.5vw] bg-zinc-100 rounded-full'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-2/3 h-2/3 bg-black rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${degree}deg)`}} className=' absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 '>
                            <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
                <div className='relative w-[10.5vw] h-[10.5vw] bg-zinc-100 rounded-full'>
                    <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-2/3 h-2/3 bg-black rounded-full'>
                        <div style={{transform: `translate(-50%, -50%) rotate(${degree}deg)`}} className=' absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 '>
                            <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ending
