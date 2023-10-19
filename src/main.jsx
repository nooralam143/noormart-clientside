import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Root from './Component/Root.jsx/Root';
import Home from './Component/HomePage/Home';
import AddProduct from './Component/Product/AddProduct';
import Login from './Component/User/Login';
import Register from './Component/User/Register';
import MyCart from './Component/User/MyCart';
import Profile from './Component/User/Profile';
import Settings from './Component/User/Settings';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';
import AuthProvider from './Component/Provider/AuthProvider';
import AddBrand from './Component/Product/AddBrand';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/add-product',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: '/add-brand',
        element: <PrivateRoute><AddBrand></AddBrand></PrivateRoute>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/my-cart',
        element: <MyCart></MyCart>,
      },

      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>,
      },
      {
        path: '/settings',
        element: <PrivateRoute><Settings></Settings></PrivateRoute>,
      },
    ]
  },
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  
  </React.StrictMode>,
)
