import React from 'react';
import Card from './Card';

function Review() {

  const cardData = [
    {image: "https://ochi.design/wp-content/uploads/2022/04/logo001.svg", badge: "2019-2022" },
    {image: "https://ochi.design/wp-content/uploads/2022/04/logo002.svg", badge: "rating 5.0 clutch" },
    {image: "https://ochi.design/wp-content/uploads/2022/04/logo003.png", badge: "bussiness bootcamp alumini" },
  ]

  return (
    <div data-scroll data-scroll-section className='w-full bg-zinc-100'>
      <div className='py-40 px-20 bg-zinc-100 flex gap-8 justify-between'>
        {
          cardData.map((items, index)=>(
            <Card 
              value = {items}
              index = {index}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Review;
