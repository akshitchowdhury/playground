import React, { useEffect, useState } from 'react'

const CustomCarousel = () => {

const colors = ["red","black","yellow","violet","pink"]

const[colorList,setColorList] = useState([])
const[selectedColor,setSelectedColor] = useState("")
const[colorIndex,setColorIndex] = useState(0)
const copyColorList= ()=>{
    setColorList([...colors])
console.log("Selected color", selectedColor)
}

const handleColorChange = ()=>{

    setSelectedColor(colorList[colorIndex])
    setColorIndex(colorIndex+1)
}
useEffect(()=>{
    copyColorList()
},[])
    return (
        <>
    {
        console.log("Color list copied", colorList, selectedColor)
        
    }
    {
        
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
        backgroundColor: selectedColor
      }}>
    <button onClick={handleColorChange}>Click me to change color</button>
      </div>
    </div>
    </>
  )
}

export default CustomCarousel
