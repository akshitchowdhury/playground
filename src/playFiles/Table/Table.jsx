import React, { useEffect, useState } from 'react'
import data from './data'

const Table = () => {
    const[dataList,setDataList] = useState([])
    const depts = new Set (data.map((item)=>item.dept))
    const[deptList,setDeptList] = useState([])
    
     const[objectList,setObjectList] = useState([{name: '', dept:''}])
    useEffect(()=>{
        // setDataList(data)
        // setDeptList(data.map((item)=>item.dept))
        console.log(deptList)
        setDataList(data)
        setDeptList([...depts])

        const groupedList = [...depts].map((dept)=>{
            const people = data.filter((item)=>item.dept===dept);
            return{
                dept: dept,
                people: people.map((person)=>({
                    name: person.name,
                    email: person.email
                }))
            }
        })
    setObjectList(groupedList)
    },[])
  return (
    <div>
{
    deptList.map((item,index)=>(
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
