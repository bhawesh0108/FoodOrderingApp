import {Link} from 'react-router-dom'
import { IMAGES_CDN } from '../../utils/Constants';
const RestaurantCard = ({info})=>{


    return (
       <Link className="flex flex-col w-[18%] h-[50%] rounded-md" to={`/restaurant/${info.id}`}>
            <div className="h-[100%] overflow-hidden p-2" >
            <img className='w-[100%] h-[55%] object-cover object-center rounded-md' src={IMAGES_CDN+info.cloudinaryImageId}></img>
           <div className='py-4 px-1'>
           <h2 className="font-bold text-lg">{info.name}</h2>
            <h3 className="my-2 text-md text-gray-500">{info.avgRating} Rating</h3>
            <h3 className="my-2 text-sm text-gray-500">{info.cuisines.slice(0,4).join(",")}</h3>
           </div>

        </div>
       </Link>
 

      


    )


}

export default RestaurantCard;