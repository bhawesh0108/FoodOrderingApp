import { useState,useEffect } from "react"

const useOnlineCheck = ()=>{
   
    const [isOnline,setIsOnline]  = useState(true);

    useEffect(()=>{

        window.addEventListener("offline",()=>{
            setIsOnline(false);
        })

        window.addEventListener("online",()=>{
            setIsOnline(true);
        })

    },[])

    return isOnline;
}

export default useOnlineCheck;