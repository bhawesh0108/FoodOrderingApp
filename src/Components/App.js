import Header from './Header'
import Body from './Body';
import { Outlet } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "../../utils/store"

const App = ()=>{

    return (
        
            <Provider store={store}>
            <Header />
            <Outlet />
            </Provider>

     
    
    )


}

export default App;