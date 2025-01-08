import React, { useEffect, useState } from 'react'
import data from './data'

const Table = () => {
    const[dataList,setDataList] = useState([])
    const depts = new Set (data.map((item)=>item.dept))
    const[deptList,setDeptList] = useState(depts)

     
    useEffect(()=>{
        // setDataList(data)
        // setDeptList(data.map((item)=>item.dept))
        console.log(deptList)
        setDataList([...deptList])
    },[])
  return (
    <div>
{
    dataList.map((item,index)=>(
        <>
            <p key={index}>{item}</p>
        </>
    ))
}
      <table>
        <th></th>
      </table>
    </div>
  )
}

export default Table
