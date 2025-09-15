import React from 'react'
import { createBrowserRouter, Outlet, Router, RouterProvider } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ServicePage from '../pages/ServicePage'
import Error404 from '../pages/Error404.jsx'
function RouterWrapper() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: (<Outlet />),
            children: [
                {
                    path: "",
                    element: <HomePage />
                },
                {
                    path: "dich-vu",
                    element: <ServicePage />
                },
                {
                    path: "bang-gia",
                    element:<></>
                }
            ]
        },
        {
            path: "*",
            element:  <Error404 />
        }
    ]);

  return (
    <RouterProvider router={router} />
  )
}

export default RouterWrapper
