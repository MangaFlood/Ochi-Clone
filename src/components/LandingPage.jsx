import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='h-screen w-full pt-1 bg-zinc-900'>
      <div className='textStructure mt-52 px-20'>
      {[
        "we create",
        "eye-opening",
        "presentations"
      ].map((elem, index) => 
        index === 1 ? (
          <div key={index} className='flex items-center'>
            <h1 className='Masking uppercase text-[10vw] leading-[0.75] font-["Masker"]'>
              {elem}
            </h1>
          </div>
        ) : (
          <div key={index} className='flex items-center'>
            <h1 className='Masking uppercase text-[10vw] leading-[0.75] font-["Masker"]'>
              {elem}
            </h1>
          </div>
        )
      )}

      </div>
      <div className='flex justify-between items-center gap-20 px-20 py-8 border-t-[0.1px] border-zinc-500 mt-48'>
        {[
          "For public and private companies",
          "From the first pitch to IPO",
          <div className='flex gap-2'>
            <h1 className='uppercase px-6 py-2 rounded-full border-[1px] border-zinc-300'>start the project</h1>
            <h1 className='px-3 py-2 rounded-full border-[1px] border-zinc-300'><FontAwesomeIcon className='rotate-[-45deg]' icon={faArrowRight} /></h1>
          </div>
        ].map((elem, index)=>(
          <p>{elem}</p>
        ))}
      </div>
    </div>
  )
}

export default LandingPage;
