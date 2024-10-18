import { useSelector,useDispatch } from "react-redux";
import MenuItem from "./MenuItem";
import {clearCart} from "../../utils/cartSlice";
const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items)
    const dispatch = useDispatch();
    const handleClearCart = ()=>{

        dispatch(clearCart());

    }
    return (
        <div className="m-2 p-4 flex flex-col justify-center items-center gap-6">
            <h1 className="font-bold text-2xl mb-2">Cart</h1>
            <button onClick={handleClearCart} className="my-6 py-2 px-4 m-2 bg-black text-white rounded-lg">Clear Cart</button>

            <div className="w-[60%] flex flex-col">
            { cartItems.map(itemDetail => <MenuItem itemDetails={itemDetail}/>)}
            </div>

    

            
        </div>
    )
}

export default Cart;