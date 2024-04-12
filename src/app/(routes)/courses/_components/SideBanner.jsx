import React from 'react'
import Image from "next/image"
function SideBanner() {
  const banner=[
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmKrUEJ4l2LcKyY4L3fzoU860xsU7r5SlYMizUXCImAw&s',
    "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20200214165928/Web-Development-Course-Thumbnail.jpg",
    "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png?auto=format%2Ccompress%2C%20enhance&dpr=1&w=265&h=216&fit=crop&q=50"
  ]
  return (
    <div className="flex flex-col gap-4">
      {
        banner?.map((ele,index)=>(
          <Image src={ele} key={index} alt="banner image " width={500} height={500} className='rounded-xl object-contain' />
        ))
      }
    </div>
  )
}

export default SideBanner