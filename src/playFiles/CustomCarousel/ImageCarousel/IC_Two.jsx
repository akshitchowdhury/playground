import React, { useEffect, useState } from 'react'

const IC_Two = () => {
    const[imageList,setImageList] = useState([])
    const fetchImages = async () => {
        const response = await fetch("https://dummyjson.com/products",{method: "GET"})
        const data = response.json();
        setImageList(data.products.images)
        console.log(imageList)
    }

    useEffect(()=>{
        fetchImages()
    },[])
  return (
    <div>
      
    </div>
  )
}

export default IC_Two
