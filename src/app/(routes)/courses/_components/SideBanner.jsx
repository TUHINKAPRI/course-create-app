import React from 'react'
import Image from "next/image"
function SideBanner() {
  return (
    <div>
      <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKrUEJ4l2LcKyY4L3fzoU860xsU7r5SlYMizUXCImAw&s' alt="banner image " width={500} height={500} className='rounded-xl object-contain' />
    </div>
  )
}

export default SideBanner