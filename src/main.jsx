import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Shop from './components/Shop/Shop.jsx'
import Home from './components/Layout/Home.jsx'
import Orders from './components/Orders/Orders.jsx'
import Inventory from './components/Inventory/Inventory.jsx'
import Login from './components/Login/Login.jsx'
import cartProductsLoader from './loaders/cartProductsLoader.js'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: '/',
        element: <Shop />,
      },
      {
        path: 'orders',
        element: <Orders />,
        loader: cartProductsLoader
      },
      {
        path: 'inventory',
        element: <Inventory />,
      },
      {
        path: 'login',
        element: <Login />,
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
