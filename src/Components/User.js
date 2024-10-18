import {useState,useEffect} from 'react';
import axios from 'axios';
const User  = ()=>{
    const [userInfo,setUserInfo] = useState({
        name:"Name",
        login:"userName"
    });

    useEffect(()=>{
        fetchUserInfo();

    },[])

    const fetchUserInfo = async ()=>{
        const data =  await axios.get("https://api.github.com/users/bhawesh0108");
        console.log(data);
        setUserInfo(data.data);
    }

    return (
        <div>
            <h2>{userInfo.name}</h2>
            <h2>{userInfo.login}</h2>
        </div>
    )
}

export default User;