import { useRouteError } from "react-router-dom"
const Error = ()=>{
   
    const err = useRouteError();
    console.log(err)
    return (
        <div>
            Error:{err.status}<br></br><br></br>
        {err.error.message}
        </div>
    )
}

export default Error