import React, { useEffect, useState } from 'react'

function Eyes() {

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
    <div className='Eyes w-full h-screen overflow-hidden'>
      <div data-scroll data-scroll-section data-scroll-speed="-0.7" className='w-full relative h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
        <div className='flex gap-16 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] '>
            <div className='relative w-[12vw] h-[12vw] bg-zinc-100 rounded-full'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-2/3 h-2/3 bg-black rounded-full'>
                    <div style={{transform: `translate(-50%, -50%) rotate(${degree}deg)`}} className=' absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] line w-full h-10 '>
                        <div className='w-10 h-10 rounded-full bg-zinc-100'></div>
                    </div>
                </div>
            </div>
            <div className='relative w-[12vw] h-[12vw] bg-zinc-100 rounded-full'>
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

export default Eyes