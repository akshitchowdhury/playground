import React, { useEffect, useState } from 'react'

const ImageCarousel = () => {
    const[productList,setProductList] = useState([])
    const[pordImages,setProdImages] = useState([])
    const getProducts = async()=>{
        const response = await fetch("https://dummyjson.com/products",{method: "GET"})
        const data = await response.json()
        setProductList(data.products)

        setProdImages(data.products.forEach((product)=>product.images))

        console.log("Product list", productList)
        console.log("Images arr", pordImages)
    }

    useEffect(()=>{
        getProducts()
    },[])
  return (
    <div>
      {
        productList.map((item,index)=>(
            <>
                <p key={index}>
                    {item.title}
                </p>
                <img className='h-[300px] w-[200px]' src={item.images}></img>
            </>
        ))
      }
    </div>
  )
}

export default ImageCarousel
