import React, { useState } from 'react'

const CustomCarousel = () => {

const colors = ["red","black","yellow","violet","pink"]

const[colorList,setColorList] = useState([colors])
    return (
        <>
    {
        console.log(colorList)
    }
    <div>
    
      {
        
        colorList.map((index,color)=>(
            <>
                <p key={index}>
                    {color}
                </p>
            </>
        ))
      }
    </div>
    </>
  )
}

export default CustomCarousel
