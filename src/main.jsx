import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './components/Home/Home.jsx';
import Foods from './components/Foods/Foods.jsx';
import FoodDetails from './components/FoodDetails/FoodDetails.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
        {
          path:'/',
          element: <Home></Home>,
          errorElement: <ErrorPage></ErrorPage>,
          children:[
            {
              path: '/foods',
              loader: () => fetch('https://www.themealdb.com/api/json/v1/1/search.php?s'),
              element: <Foods></Foods>
            },
            {
              path: 'food/:foodId',
              loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.foodId}`),
              element: <FoodDetails></FoodDetails>

            }
          ]
        }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <RouterProvider router={router} />
  </React.StrictMode>,
)
