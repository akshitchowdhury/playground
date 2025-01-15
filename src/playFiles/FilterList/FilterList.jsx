import React, { useEffect, useState } from 'react';
import data from './data';

const FilterList = () => {
  const [animeList, setAnimeList] = useState([]);
  const[paginatedList,setPagionatedList] = useState([])
  const[animeIndex,setAnimeIndex] = useState(0)
  const[searchText,setSearchText] = useState('')
  const itemsPerPage = 10
    const handleNExt = ()=>{
        if(animeIndex-itemsPerPage<animeList.length){
            setAnimeIndex(animeIndex+itemsPerPage)

        }
            }
    const handlePrev = ()=>{
        if(animeIndex-itemsPerPage>=0){
            setAnimeIndex(animeIndex-itemsPerPage)
        }
        
        console.log("Prev button clicked")
    }
    const filteredAnimeList = animeList.filter((item)=>item.toLowerCase().includes(searchText.toLowerCase()))
    useEffect(()=>{
        setAnimeList(data);
    },[])
  useEffect(() => {
    
    setPagionatedList(filteredAnimeList.slice(animeIndex,animeIndex+itemsPerPage))
  }, [animeList,animeIndex,filteredAnimeList]);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Animes List</h1>
      <input placeholder='Search your Anime' value={searchText} onChange={(e)=>setSearchText(e.target.value)} className='p-2 border-[1px] border-black rounded-md'/>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white">
              <th className="px-4 py-2 text-left">#</th>
              <th className="px-4 py-2 text-left">Anime Name</th>
            </tr>
          </thead>
          <tbody>
            {paginatedList.map((anime, index) => (
                
              <tr
                key={index}
                className={`${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'} border-b border-gray-300`}
              >
                <td className="px-4 py-2">{animeIndex+index+1}</td>
                <td className="px-4 py-2">{anime}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='flex flex-row gap-6'>
        <button disabled={animeIndex===0} onClick={handlePrev} className='p-2 bg-red-500 border-[1px] border-black rounded-md'>{animeIndex>0 ? "Prev" : "disabled"} </button>
        <button className={`p-2 bg-blue-500 border-[1px] border-black rounded-md ${animeIndex + itemsPerPage >= animeList.length ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={animeIndex + itemsPerPage >= animeList.length} onClick={handleNExt}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default FilterList;
