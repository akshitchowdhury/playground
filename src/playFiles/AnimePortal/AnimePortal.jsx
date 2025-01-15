import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import animeData from './data'

const AnimePortal = () => {
    const[animeStack,setAnimeStack] = useState([])
    const[animeList,setAnimeList] = useState([])
    const[animeCategories,setAnimeCategories] = useState([])
    const animeRender = ()=>{
     const animeTitles =  animeData.data.categories.flatMap((category)=> category.animeStack.map((anime)=>anime.title))
        
        setAnimeCategories(animeData.data.categories)
        setAnimeList(animeTitles)
        setAnimeStack(animeData.data.categories.map((item)=>item.animeStack))
        console.log(animeStack)
    }

    useEffect(()=>{
       animeRender()
    },[])
  return (
    <>
    <div>
      {/* {
        animeCategories.map((anime,index)=>(
            <>
                <p key={index}>
                    {anime.category}
                </p>
            </>
        ))
      }
      {
        animeStack.flatMap((stack,index)=>(
            stack.map((block)=>(
                <>
                    <p>
                        {block.title}
                    </p>
                </>
            ))
        ))
      } */}
      
    </div>
    <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
  <thead>
    <tr className="bg-gray-800 text-white text-left">
      <th className="py-3 px-4 uppercase text-sm font-semibold">Category</th>
      <th className="py-3 px-4 uppercase text-sm font-semibold">Title</th>
      <th className="py-3 px-4 uppercase text-sm font-semibold">Release year</th>
      <th className="py-3 px-4 uppercase text-sm font-semibold">Rating</th>
    </tr>
  </thead>
  <tbody>
    {animeCategories.map((category, index) => (
      <React.Fragment key={index}>
        {category.animeStack.map((item, animeIndex) => (
          <tr
            key={`${index}-${animeIndex}`}
            className={`${
              animeIndex % 2 === 0 ? 'bg-gray-100' : 'bg-white'
            } hover:bg-indigo-100 transition-all duration-300`}
          >
            {/* Category Name */}
            {animeIndex === 0 && (
              <td
                rowSpan={category.animeStack.length}
                className="py-3 px-4 font-medium text-gray-700 text-center bg-gray-200"
              >
                {category.category}
              </td>
            )}
            {/* Anime Title */}
            <td className="py-3 px-4 text-gray-600">{item.title}</td>
            <td className="py-3 px-4 text-gray-600">{item.releaseYear}</td>
            {/* Rating */}
            <td className="py-3 px-4 text-gray-600">{item.rating}</td>
          </tr>
        ))}
      </React.Fragment>
    ))}
  </tbody>
</table>


    </>
  )
}

export default AnimePortal
