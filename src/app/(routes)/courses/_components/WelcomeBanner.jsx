import React from 'react';
import Image from 'next/image';
function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-lg  p-5'>
      <Image src='/banner.avif' height={100} width={100} alt='banner' className='rounded-md'/>
      <div>
        <h2 className='font-bold text-[27px]'>Welcome to <span className='text-primary'>Study Sphere</span></h2>
        <h2 className='text-gray-500'>Explore, Learn and Build All Real Life Projects</h2>
      </div>
    </div>
  )
}

export default WelcomeBanner