import {Link} from 'react-router-dom'
import {LOGO_URL} from '../../utils/Constants';
import useOnlineCheck from '../../utils/useOnlineCheck';
import {useSelector} from "react-redux";


const Header  = ()=>{

    const isOnline = useOnlineCheck();
    const cartItems = useSelector((store)=>store.cart.items);

    return (

        <div className = "flex justify-between h-24 mb-4 items-center p-4 border-b-2" >
            <div className="w-[10%] h-[100%] overflow-hidden">
               <img className="w-[100%] h-[100%]  object-center" src={LOGO_URL} />
            </div>
            <div className="navigation">
                <ul className='flex'>
                    <li className="px-2 font-semibold text-md">
                        Online Status {isOnline ? "🟢":"🔴"}
                    </li>
                    <li className="px-2 font-semibold text-md">
                        <Link to="/">Home</Link>
                       
                    </li>
                    {/* <li className="px-2 font-semibold text-md">
                        <Link to="/about">About</Link>           
                    </li>
                    <li className="px-2 font-semibold text-md">
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li className="px-2 font-semibold text-md">
                        <Link to="/grocery">Grocery</Link>
                    </li> */}
                    <li className="px-2 font-bold text-lg">
                       <Link to="/cart">Cart {cartItems.length}</Link> 
                    </li>
            

                </ul>
                
        
            </div>
        </div>





    )

}

export default Header;