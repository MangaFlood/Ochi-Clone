import React from 'react'

function About() {
  return (
    <div className='w-full pt-20 pb-10 bg-yellow-300 rounded-tl-3xl rounded-tr-3xl'>
      <h1 className='text-zinc-900 text-7xl px-20'>
      Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great peo-ple.
      </h1>
      <div className='border-t-2 py-5 px-20 border-zinc-900 text-zinc-900 mt-28 flex justify-between'>
        <h1>What you can expect:</h1>
        <div className='aboutRight w-[50vw] flex'>
           <div className='discription px-20 flex flex-col '>
            {[
                "We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it's live or digital, delivered for one or a hundred people.",
                "We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating."
            ].map((elem, index)=>(
                <p className='w-[50%]' key={index}>{elem}</p>
            ))}
           </div>
           <div className='aboutLinks flex flex-col'>
            {[
                "instagram",
                "behance",
                "facebook",
                "linkedin"
            ].map((elem, index)=>(
                <a className='w-[50%]' key={index} href="#">{elem}</a>
            ))}
           </div>
        </div>
      </div>
      <div className='border-t-2 py-5 px-20 border-zinc-900 text-zinc-900 mt-28 flex justify-between'>
        <div className='aboutLeft2'>
          <h1 className='text-zinc-900 text-7xl'>Our approach:</h1>
          <button className='rounded-full bg-black text-white flex gap-3 px-6 py-4 text-xl mt-8 uppercase'>read more</button>
        </div>
        <div className='aboutRight2 w-[50vw] rounded-xl overflow-hidden'>
          <img className='w-full' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default About