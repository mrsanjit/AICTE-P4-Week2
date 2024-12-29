import React from 'react'
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import {Card_Images}  from '../../Data/Card_Images';

const  HomeSectionCreousel = (data,sectionName) => {
    console.log('sectionName:', sectionName);

    const responsive = {
        0: { items: 1 },
        720: { items: 3 },
        1024: { items: 5.5 },
    };

    const items = Card_Images.slice(0,10).map((item,index) => <HomeSectionCard product={item}/>)
    return (
       <div className='border'>
          <h2 className='text-2xl font-extrabold textgray-800 py-5'>{sectionName}</h2>
        <div className='relative px-5 lg:px-8'>
            <div className='relative p-5'>
          
            <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                autoPlay
                autoPlayInterval={4000}
                infinite
               
            />
            </div>
            </div>
        </div>

    )
}

export default HomeSectionCreousel;
