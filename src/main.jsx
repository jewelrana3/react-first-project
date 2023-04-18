import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Shop from './components/Shop/Shop';
import Home from './components/Layout/Home';
import Order from './components/Order/Order';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import loaderProduct from './loaders/loaderProduct';
import CheakOut from './components/CheakOut/CheakOut';
import SignUp from './components/SignUp/SignUp';
import AuthProvider from './components/Providers/AuthProvider';
import PrivateRouter from './router/PrivateRouter';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: '/cheakout',
        element: <PrivateRouter><CheakOut></CheakOut></PrivateRouter>
      },
      {
        path: '/order',
        element: <Order></Order>,
        loader: loaderProduct
      },
      {
        path: '/inventory',
        element: <PrivateRouter><Inventory></Inventory></PrivateRouter>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: 'signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
