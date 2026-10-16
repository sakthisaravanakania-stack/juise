import React, { useSyncExternalStore } from 'react'
import "./App.css";
import{createBrowserRouter,RouterProvider} from 'react-router-dom'
import Template from './components/Template';
import Home from './components/Home';
import About from './components/About';
import Menu from './components/Menu';
import Products from './components/Products';
import Review from './components/Review';
import Contact from './components/Contact';



const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Template />,
      children: [
        {
         index:true,
          element:<Home />
    },
    {
      path: '/about',
      element:<About />
    },
    {
      path: '/menu',
      element:<Menu />
    },

    {
      path: '/products',
      element:<Products />
    },
    {
      path: '/review',
      element:<Review />
    },
    {
      path: '/contact',
      element:<Contact />
    }
  ]
    }
    
    
  ])

  return (
   < RouterProvider router={router} />
  )
}

export default App
