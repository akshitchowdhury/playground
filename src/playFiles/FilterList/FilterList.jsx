import React, { useEffect, useState } from 'react'
import data from './data'

const FilterList = () => {

    const[animeList,setAnimeList] = useState([])
    const[searchAnime,setSearchAnime] = useState("")

    useEffect(()=>{
            setAnimeList(data.filter((anime)=>anime.toLowerCase().includes(searchAnime.toLowerCase())))
    },[searchAnime])

    const handleFilterWithA = ()=>{
        setAnimeList(data.filter((anime)=>anime.toLowerCase().charAt(0)==="a"))
    }
    // const fileterdAnimeList = setAnimeList(animeList.filter((anime)=>anime===searchAnime.toLowerCase()))
    return (
    <div>
    <button onClick={handleFilterWithA}>Filter anime with "A"</button>
    <button onClick={()=>setAnimeList(data)}>Reset List</button>
    <input type='text' value={searchAnime} onChange={(e)=>setSearchAnime(e.target.value)} placeholder='Search Anime'/>
            {
                animeList.map((anime,index)=>(<>
                    <div key={index}>
                        <p>{anime}</p>
                    </div>
                </>))
            }      
    </div>
  )
}

export default FilterList
