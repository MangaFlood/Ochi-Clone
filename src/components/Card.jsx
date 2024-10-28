import React from 'react'

function Card({value, index}) {
    const {image, badge} = value
  return (
    <div className={` ${index === 0 ? "w-1/2 bg-green-900" : "w-1/4  bg-zinc-800"} h-[25vw] p-10 relative rounded-3xl`}>
      <img className='w-[7.5vw] absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]' src={image} alt="" />
      <button className='border-[1px] border-zinc-400 tracking-tighter uppercase font-light bottom-0 px-4 py-2 rounded-full' >{badge}</button>
    </div>
  )
}

export default Card
