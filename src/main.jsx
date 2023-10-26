import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeLayout from './comnponent/LayoutPage/HomeLayout';
import Home from './comnponent/Pages/HomeComponent/Home';
import AboutUs from './comnponent/Pages/AboutUs';
import MenuPricing from './comnponent/Pages/MenuPricing';
import MasterChef from './comnponent/Pages/MasterChef';
import Contact from './comnponent/Pages/Contact';

const router =createBrowserRouter([
  {
    path:'/',
    element: <HomeLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>,
      },
      {
        path:'/aboutus',
        element:<AboutUs/>
      },
      {
        path:'/menu&pricing',
        element:<MenuPricing/>,    
      },
      {
        path:'/masterChef',
        element:<MasterChef/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
        
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
