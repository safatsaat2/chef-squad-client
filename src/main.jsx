import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Layout from './component/Layout/Layout'
import Login from './component/Login/Login'
import Register from './component/Register/Register'
import AuthProviders from './component/Providers/AuthProviders'
import PrivateRoute from './component/PrivateRout/PrivateRoute'
import RecipePage from './component/RecipePage/RecipePage'
import NotFound from './component/Error/NotFound'
import Blog from './component/Blog/Blog'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader:() => fetch(`https://chef-squad-server-safatsaat2.vercel.app/chefs`)
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'register',
        element: <Register></Register>
      },
      {
        path: 'recipepage/:id',
        element:<PrivateRoute><RecipePage></RecipePage></PrivateRoute>,
        loader: ({params}) => fetch(`https://chef-squad-server-safatsaat2.vercel.app/recipe/${params.id}`)
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      },
      {
        path: '*',
        element:<NotFound></NotFound>
      }
    
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
