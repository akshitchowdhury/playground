import React, { useEffect, useState } from 'react'

const ImageCarousel = () => {
    const[productList,setProductList] = useState([])
    const[pordImages,setProdImages] = useState([])
    const[carousleImgList,setCarousleImgList] = useState([])
    const getProducts = async()=>{
        const response = await fetch("https://dummyjson.com/products",{method: "GET"})
        const data = await response.json()
        setProductList(data.products)

        setProdImages(data.products.flatMap((product)=>product.images)) 

        setCarousleImgList(pordImages.slice(7,13))
        console.log("Product list", productList)
        console.log("Images arr", pordImages)
        console.log("carousleImgList", carousleImgList)
        
    }   

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>

    <div className='grid grid-cols-3'>
      {/* {
        pordImages.map((img,index)=>(
            <>
                <img className='h-[400px] w-[200px]' key={index} src={img}/>
            </>
        ))
      } */}

      {
        carousleImgList.map((img,index)=>(
            <>
                <img className='h-[400px] w-[200px]' src={img}/>
            </>
        ))
      }
      </div>
    </div>
  )
}

export default ImageCarousel
