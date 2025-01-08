import React, { useEffect, useState } from 'react'
import data from './data'

const Table = () => {
    const[dataList,setDataList] = useState([])
    const depts = new Set (data.map((item)=>item.dept))
    const[deptList,setDeptList] = useState([])
    
     const[objectList,setObjectList] = useState([])
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
                emp: people.map((person)=>({
                    name: person.name,
                    email: person.email
                }))
            }
        })
    setObjectList(groupedList)
    console.log(groupedList)
    },[])
  return (
    <div>

<table>
  <thead>
    <tr>
      <th>Dept</th>
      <th>Name</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {objectList.map((group, index) => (
    group.emp.map((employee, i) => (
      <tr key={`${index}-${i}`} className="border-b hover:bg-gray-100">
        {/* Department Name - Only on the first employee of the department */}
        {i === 0 && (
          <td
            rowSpan={group.emp.length}
            className="bg-gray-200 border-2 border-black text-center p-4 font-semibold text-lg"
          >
            {group.dept}
          </td>
        )}
        {/* Employee Name */}
        <td className="text-center p-4">{employee.name}</td>
        {/* Employee Email */}
        <td className="text-center p-4">{employee.email}</td>
      </tr>
    ))
  ))}
</tbody>

</table>

    </div>
  )
}

export default Table
