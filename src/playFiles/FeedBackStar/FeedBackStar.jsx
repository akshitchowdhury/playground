import { hover } from '@testing-library/user-event/dist/hover'
import React, { useState } from 'react'

const FeedBackStar = () => {
    
    const[hoverIndex,setHoverIndex] = useState(null)
    const handleEntryHover = (ind)=>{
        setHoverIndex(ind);
        
    }
  return (
    <>
    {/*  onMouseLeave={()=> hoverIndex===4 ? setHoverIndex(null) : setHoverIndex(index)} */}
    <div className='flex flex-row'>
    {
        Array.from({length:5}).map((_,index)=><div  key={index} 
        onMouseEnter={()=>handleEntryHover(index)} onMouseLeave={()=>setHoverIndex(null)}
        className={`w-[100px] h-[50px]  rounded-md border-[2px] border-black ${hoverIndex>=index ? "bg-amber-500" : "" }`}></div>)
    }
    </div>
    </>
  )
}

export default FeedBackStar
