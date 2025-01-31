import React, { useEffect, useState } from 'react'

const IC_Two = () => {
    const[imageList,setImageList] = useState([])
    const[productList,setProductList] = useState([])
    const fetchImages = async () => {
        const response = await fetch("https://dummyjson.com/products",{method: "GET"})
        const data = await response.json();
        setProductList(data.products)
        setImageList(productList.flatMap((item)=>item.images))
        // setImageList(data.products.flatmap((item)=>item.images))    
        console.log("Product list", productList)
        console.log("Image list",imageList) 
    }

    useEffect(()=>{
        fetchImages()
    },[]) 
  return (
    <div className='grid grid-cols-3 p-4'>
      {
        imageList.map((image,idx)=>(
            <>
            <div className='flex flex-row gap-3' key={idx}>
                <img src={image} className='h-[200px] w-[100px]'/>
                </div>
            </>
        ))
      }
    </div>
  )
}

export default IC_Two
