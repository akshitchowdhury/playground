import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import animeData from './data'

const AnimePortal = () => {
    const[animeList,setAnimeList] = useState([])
    const[animeCategories,setAnimeCategories] = useState([])
    const animeRender = ()=>{
        setAnimeCategories(animeData.data.categories)
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
    </div>
  )
}

export default AnimePortal
