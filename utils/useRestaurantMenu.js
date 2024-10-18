import {useEffect,useState} from 'react'
import axios from 'axios';
import {RESTAURANTS_MENU_URL} from "./Constants";

const useRestaurantMenu = (resId)=>{

    const [menuDetails,setMenuDetails] = useState(null);
    // const [menuItems,setMenuItems] = useState([]);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
       
       const data = await axios.get(`${RESTAURANTS_MENU_URL}${resId}`);
       console.log(data);
       setMenuDetails(data);
    }

    return menuDetails;

}

export default useRestaurantMenu;