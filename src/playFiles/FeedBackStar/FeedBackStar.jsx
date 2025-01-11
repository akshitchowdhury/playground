import React, { useState } from 'react'

const FeedBackStar = () => {
    const[isHovered,setIsHovered]= useState(false)
  return (
    <>
    <div onMouseEnter={()=>setIsHovered(!isHovered)} onMouseLeave={()=>setIsHovered(!isHovered)}
     className={`w-[100px] h-[50px] rounded-md border-[2px] border-black ${isHovered ? "bg-amber-500" : "" }`}>
      
    </div>
    </>
  )
}

export default FeedBackStar
