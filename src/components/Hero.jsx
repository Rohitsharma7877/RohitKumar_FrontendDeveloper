import React from 'react';
import { heroImg } from '../assets';


const Hero = () => {
  return (
    <div className='w-full bg-white py-24'>
        <div className='md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0'>
            
            <div className='flex flex-col justify-start gap-4'>
                <p className='py-2 text-2xl text-[#20B486] font-medium'>START TO SUCCESS</p>
                <h1 className='md:leading-[72px] py-2 md:text-6xl text-5xl font-semibold'>I started                     SpaceX with the  expectation 
                    of failure
                </h1>
                <p className='py-2 text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>
                
                <div className='bg-[teal] m-[10px]  border max-w-[100px] gap-[100px]   rounded-md flex justify-between'>
                    
                    <button  className='p-[15px]' >login 
                    </button>
                    <button className='bg-white border max-w-[100px] p-3  rounded-md flex justify-between'>logout</button>
                </div>
            </div>
            <img  src={heroImg} className="md:order-last  order-first" />
        </div>
    </div>
  )
}

export default Hero