import React from 'react'
import Image from 'next/image'
function OurTeam() {

const team=[
  {
    name:"Tuhin Kapri",
    field:"Full Stack Developer",
    img:'/img1.jpg'
  },{
    name:"Avinash Kuamr",
    field:"Business Analytics",
    img:'/img2.jpg'
  },{
    name:"Vishal Kuamr",
    field:"UI/UX",
    img:'/img3.jpg'
  }
]


  return (
    <section id="team" className="py-24 text-center">
  <div className="container px-4">
    <div className="text-center">
      <h2 className="mb-12 text-4xl text-gray-700 font-bold tracking-wide">
        Our Team
      </h2>
    </div>
    <div className="flex flex-wrap justify-center">


    {
      team?.map((ele)=>(
        <div className="max-w-sm sm:w-1/2 md:w-1/2 lg:w-1/3">
        <div
          className="
          m-3
          text-center
          bg-white
          shadow
          duration-300
          group
          hover:shadow-lg
        "
        >
          <div className="team-img hover:shadow-sky-700 shadow-md ">
            <Image className="img-fluid" src={ele.img} height={400} width={400} alt="baneer" />
            
          </div>
          <div className="text-center px-5 py-3">
            <h3 className="text-gray-800 font-bold uppercase text-lg my-2">
              {ele.name}
            </h3>
            <p>{ele?.field}</p>
          </div>
        </div>
      </div>
      ))
    }
     
     
      {/* Team Item Ends */}
      {/* Team Item Starts */}
     
    </div>
  </div>
</section>

  )
}

export default OurTeam