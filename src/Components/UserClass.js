import React from 'react'
import axios from 'axios';
import userContext from '../../utils/userContext';
class UserClass extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            name:"Name",
            login:"userName"
        } 

        console.log("constructor called")
    }

    async componentDidMount(){
        console.log("component Mounted")
       const data = await axios.get("https://api.github.com/users/bhawesh0108");
       this.setState(data.data);
    }

    componentDidUpdate(){
        console.log("component updated");
    }

    componentWillUnmount(){
        console.log("component unmounted");
    }
    
    render(){
        console.log("rendering...")
        return (
            <div>
                <userContext.Consumer>
                   { (data)=><h1>{data.name}</h1>}
                </userContext.Consumer>
                {/* <h2>{this.state.name}</h2> */}
                <h2>{this.state.login}</h2>
            </div>

        )
    }
}

export default UserClass;