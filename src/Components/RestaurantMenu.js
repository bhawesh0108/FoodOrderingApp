import {useEffect, useState} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../../utils/useRestaurantMenu';
import MenuCard from './MenuCard';
const RestaurantMenu = ()=>{

    const [itemIndex,setItemIndex] = useState(0);

    const {id} = useParams();

    const menuDetails = useRestaurantMenu(id);

    const categories = menuDetails?.data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(card=>{
        return card?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
    });


    return menuDetails===null?<div>Loading...</div>:(
        <div className='flex flex-col items-center'>
            <h1 className="font-bold text-2xl my-2">{menuDetails?.data?.data?.cards[2]?.card?.card?.info?.name}</h1>
            <h2 className='font-semibold text-xl my-1 text-gray-500'>Menu</h2>

            <div className="flex flex-col gap-8 items-center mt-[5vh] w-9/12"> 
                {
                    categories.map((category,ind)=> <MenuCard key={ind} categoryDetails={category.card.card} showItems={ind==itemIndex?true:false} setItemIndex={()=>setItemIndex(prev=>prev==ind?null:ind)}/>)
                }
              

            </div>
         
        </div>
    )


}

export default RestaurantMenu;