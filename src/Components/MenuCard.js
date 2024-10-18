import MenuItem from "./MenuItem";
import {useState} from "react"
import { UPARROW } from "../../utils/Constants";
import { DOWNARROW } from "../../utils/Constants";

const MenuCard = ({categoryDetails,showItems,setItemIndex})=>{

    // const [showItemVal,setShowItemVal] = useState(showItems);

    const handleClick = ()=>{
        setItemIndex()
    }

    return (
        <div className="flex flex-col gap-12 w-9/12 bg-[#E0E6ED] justify-center rounded-md shadow-lg px-4 py-2 cursor-pointer">
            <div onClick={handleClick} className="flex justify-between h-8 items-center px-4">
                <h2 className="font-bold text-xl">{categoryDetails.title}({categoryDetails.itemCards.length})</h2>
                {/* <div className="h-[50%]">
                  <img className="object-cover object-center h-[100%] w-[100%]" src={showItems?UPARROW:DOWNARROW}></img>
                </div> */}
               
            </div>
        {showItems?<div className="flex flex-col"> 

{
    categoryDetails.itemCards.map(itemCard=><MenuItem itemDetails={itemCard.card.info}/>)
}


</div>:""}


        </div>
    )



}

export default MenuCard;