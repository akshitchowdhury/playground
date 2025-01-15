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
      }
      
    </div>
  )
}

export default AnimePortal
