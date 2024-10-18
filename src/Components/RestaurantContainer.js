import { useEffect,useState } from "react";
import axios from "axios";
import RestaurantCard from "./RestaurantCard";
import Filter from "./Filter";
import {RESTAURANTS_URL} from  '../../utils/Constants';
import userContext from "../../utils/userContext";


const RestaurantContainer = ()=>{

    const [resList,setResList] = useState([]);

    const [filterList,setFilterList] = useState([]);

    useEffect(()=>{

        fetchResList();

    },[])

    const filterSearchResult = (filterList)=>{

        setFilterList(filterList);
    }

    const fetchResList = async ()=>{

        const data = await axios.get(`${RESTAURANTS_URL}`);
        setResList(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterList(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(data?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      
    }
   
    return resList? (



      
 <>

<Filter resList={resList} filterSearchResult={filterSearchResult} />



<div className="flex justify-around gap-24 flex-wrap h-[80vh] p-4">

   { filterList.map((rest)=>{
     
     return  (
       <RestaurantCard key ={rest.info.id} info={rest.info}/>
     )
    
    })}

</div>
        </>

    ) : (<h1>Loading...</h1>)
   


}

export default RestaurantContainer;