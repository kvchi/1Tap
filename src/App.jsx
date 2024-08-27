import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Aos from 'aos'
import 'aos/dist/aos.css'

import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents'
import Books from './pages/Books';
import Company from './pages/Company';
import Compliance from './pages/Compliance';
import Services from './pages/Services';
import Money from './pages/Money';
import { Sidebar } from './components'

export default function App() {
  useEffect(() => {
    Aos.init({ 
      duration: 1000,
      once: true,
      delay: 500,
    })
  }, []); 

  function PageOutlet() {
    
    return (
      <main >
        <Outlet />
        
      </main>
    )
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <PageOutlet />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "/company",
          element: <Company />,
        },
        {
          path: "/compliance",
          element: <Compliance />,
        },
        {
          path: "/money",
          element: <Money />,
        },
        {
          path: "/documents",
          element: <Documents />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/services",
          element: <Services />,
        },
      ]
    }
  ])
  return (
    <div>
      <Toaster />
      <RouterProvider router={routes}></RouterProvider> 
    </div>
    );
}







