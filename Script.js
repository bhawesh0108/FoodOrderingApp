import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/Components/App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import About from "./src/Components/About"
import Contact from "./src/Components/Contact"
import Body from "./src/Components/Body"
import Error from './src/Components/Error'
import RestaurantMenu from './src/Components/RestaurantMenu'
import {lazy,Suspense} from 'react'
import Cart from './src/Components/Cart';

const Grocery = lazy(()=>import('./src/Components/Grocery'))

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRoute = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
        { 
            path:"/",
            element:<Body />

        },
        {
            path:'/about',
            element:<About />
        },
        {
            path:"/contact",
            element:<Contact />
        },
        {
            path:"/restaurant/:id",
            element:<RestaurantMenu />
        },
        {
            path:'/grocery',
            element:<Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense>
        },
        {
            path:"/cart",
            element:<Cart />
        }

    ],
    errorElement:<Error/>

  }

])


root.render(<RouterProvider router = {appRoute} />);