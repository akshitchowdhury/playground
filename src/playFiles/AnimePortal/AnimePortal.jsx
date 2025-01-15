import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import animeData from './data'

const AnimePortal = () => {
    const[animeList,setAnimeList] = useState([])
    const[animeCategories,setAnimeCategories] = useState([])
    const animeRender = ()=>{
     const animeTitles =  animeData.data.categories.flatMap((category)=> category.animeStack.map((anime)=>anime.title))

        setAnimeCategories(animeData.data.categories)
        setAnimeList(animeTitles)
        
    }

    useEffect(()=>{
       animeRender()
    },[])
  return (
    <div>
      {
        animeCategories.map((anime,index)=>(
            <>
                <p key={index}>
                    {anime.category}
                </p>
            </>
        ))
      }

      {/* {
        animeList.map((anime,index)=>(
            <>
                <p key={index}>
                    {anime}
                </p>
            </>
        ))
      } */}
    </div>
  )
}

export default AnimePortal
