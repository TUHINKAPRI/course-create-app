"use client"



import { useAllUserCourse } from '@/hooks/course_hook'
import React from 'react'

function VideoSideBar() {
  const {data,isLoading,isError}=useAllUserCourse()
  console.log(data)
  return (
    <div>
      <h2 className='font-semibold mt-3 text-center'>couser content</h2>
          <hr className="my-3" />
              
    </div>
  )
}

export default VideoSideBar