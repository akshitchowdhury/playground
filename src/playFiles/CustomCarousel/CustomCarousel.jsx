import React, { useEffect, useState } from 'react'

const CustomCarousel = () => {

const colors = ["red","black","yellow","violet","pink"]

const[colorList,setColorList] = useState([])

const copyColorList= ()=>{
    setColorList([...colors])
}
useEffect(()=>{
    copyColorList()
},[])
    return (
        <>
    {
        console.log("Color list copied", colorList)
    }
    <div>
    
      {
        
        colorList.map((color,index)=>(
            <>
                <p key={index}>
                    {color}
                </p>
            </>
        ))
      }

      <div style={{
        width: "400px",
        height: "400px",
        backgroundColor: colorList[1]
      }}>
    <button>Click me to change color</button>
      </div>
    </div>
    </>
  )
}

export default CustomCarousel
