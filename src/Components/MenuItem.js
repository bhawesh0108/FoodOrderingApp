import { IMAGES_CDN } from "../../utils/Constants"
import {addItem} from "../../utils/cartSlice"
import { useDispatch } from "react-redux"

const MenuItem = ({itemDetails})=>{

    const dispatch = useDispatch();

    const handleAddItem = ()=>{
        
        dispatch(addItem(itemDetails));

    }


    return (
        <div className="flex justify-between items-center border-b-2 border-black-600 p-4 h-[24vh] pb-8">
        <div className="w-9/12">
         <h2 className="font-semibold text-lg">{itemDetails.name}</h2>
         <h3 className="text-md"> ₹ {itemDetails.price?itemDetails.price/100:itemDetails.defaultPrice/100}</h3>
         {itemDetails.ratings.aggregatedRating.ratingCount ? <h3 className="my-4"><spam className="text-green-600 font-semibold">{itemDetails.ratings.aggregatedRating.rating}</spam>({itemDetails.ratings.aggregatedRating.ratingCount})</h3> : <h3 className="my-4"></h3>}
         <p className="text-slate-500"> {itemDetails.description} </p>
        </div>
        <div className="h-full rounded-lg relative w-2/12">
            <div className="h-full w-full overflow-hidden rounded-lg"> 
            <img className="h-[100%] w-full object-cover object-center" src={IMAGES_CDN+itemDetails.imageId}></img>
            </div>

         <div onClick={handleAddItem} className="absolute border-2 border-slate-400 rounded-md text-green-500 font-bold px-6 py-2 -bottom-5 left-6 bg-white">ADD</div>
        </div>
    </div>
    )


}
export default MenuItem