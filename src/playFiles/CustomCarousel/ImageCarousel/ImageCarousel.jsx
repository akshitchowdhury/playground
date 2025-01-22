import React, { useEffect, useState } from 'react'

const ImageCarousel = () => {
    const[productList,setProductList] = useState([])
    const[pordImages,setProdImages] = useState([])
    const[carousleImgList,setCarousleImgList] = useState([])
    const[imageIndex,setImageIndex] = useState(0)
    const getProducts = async()=>{
        const response = await fetch("https://dummyjson.com/products",{method: "GET"})
        const data = await response.json()
        setProductList(data.products)

        setProdImages(data.products.flatMap((product)=>product.images)) 

        setCarousleImgList(pordImages.slice(7,13))
        // console.log("Product list", productList)
        // console.log("Images arr", pordImages)
        // console.log("carousleImgList", carousleImgList)
        
    }   

    useEffect(()=>{
        getProducts()
    },[productList,imageIndex])
  return (
    <div className='flex flex-row items-center justify-center align-middle justify-items-center'>

    {/* <div className='grid grid-cols-3'>


      {
        carousleImgList.map((img,index)=>(
            <>
                <img key={index} className='h-[400px] w-[200px]' aria-placeholder={img} src={img}/>
                
            </>
        ))
      }
      </div> */}
    
      <button disabled={imageIndex===0}
      className='bg-red-700 p-3'
       onClick={()=>setImageIndex(imageIndex-1)}>
                Previous image
            </button>
      <div className='imagebox w-[300px] h-[500px] border-[2px] border-blue-950'>
            <img className='object-contain' src={carousleImgList[imageIndex]}/>
            
      </div>
      <div className='flex flex-row gap-4'>
        {
            carousleImgList.map((item,index)=>(
                <div className={`h-[20px] w-[20px] rounded-full ${index===imageIndex? 'bg-blue-600': 'bg-black'} `} key={index}>
                        {index}
                </div>
            ))
        }
      </div>
      <button className='bg-blue-950 p-4' disabled={imageIndex===carousleImgList.length-1}
       onClick={()=>setImageIndex(imageIndex+1)}>
                Next image
            </button>
    </div>
  )
}

export default ImageCarousel
