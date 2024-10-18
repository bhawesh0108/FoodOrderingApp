import {useState} from "react"

const Filter = ({resList,filterSearchResult})=>{

    const [searchFilter,setSearchFilter] = useState("");

    const handleSearchButton = ()=>{
       
        const filterdList = resList.filter((res)=>res.info.name.toLowerCase().includes(searchFilter.toLowerCase()))
        filterSearchResult(filterdList);
    }

    const handleTopRestaurantsClick = ()=>{

        const topList = resList.filter((res)=>res.info.avgRating > 4.5)
        filterSearchResult(topList);
    }



    return (

        <div className="flex gap-4 h-16 items-center py-4 px-6 mb-4">
            <div className="search flex gap-4">
            <input className=" border p-2 rounded-xl" value={searchFilter} onChange={(e)=>{setSearchFilter(e.target.value)}} type="text" placeholder="Search Restaurants..."></input>
            <button className="py-3 px-8 rounded-lg bg-[#EFEFEF] text-md text-gray-600 font-bold" onClick={handleSearchButton} type="submit">Search</button>
            </div>

            <div className="filterTop">
                <button className="py-3 px-8 rounded-lg bg-[#EFEFEF] text-gray-600 text-md font-semibold text-md" onClick={handleTopRestaurantsClick}>Top Restaurants</button>
            </div>    

        </div>



    )
}

export default Filter;