import React from 'react'
import MainCarousel from '../../MainCarousel'
import HomeSectionCreousel from '../../../../HomeSectionCreousel/HomeSectionCreousel';
import { Card_Images } from '../../../../../Data/Card_Images';


const HomePage = () => {
  return (
    <div>
      <MainCarousel/>
      
        <div className='space-y-10 py20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCreousel data={Card_Images} sectionName={"Latest"}/>
       <HomeSectionCreousel  data={Card_Images}  sectionName={"Latest"}/>
      </div>
    </div>
   
  )
}

export default HomePage;
