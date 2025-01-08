import React, { useEffect, useState } from 'react'
import data from './data'

const Table = () => {
    const[dataList,setDataList] = useState([])
    useEffect(()=>{
        setDataList(data)
    },[])
  return (
    <div>
      {
        dataList.map((item,index)=>(
            <>
                <p key={index}>{item.name}</p>
            </>
        ))
      }
    </div>
  )
}

export default Table
