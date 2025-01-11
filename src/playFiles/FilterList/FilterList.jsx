import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom'

const FilterList = () => {

    const[animeList,setAnimeList] = useState([])

    useEffect(()=>{
            setAnimeList(data)
    },[])

    return (
    <div>
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
