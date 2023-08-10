import React from 'react'
import Filter from './Filter';
import Ctr from './Ctr';


const Courses = () => {
  
  return (
    <div className='w-full bg-[#E9F8F3B2] py-32'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <div className='py-4'>
            <Filter/>
            <Ctr/>                 
            </div>           
        </div>
    </div>
  )
}

export default Courses