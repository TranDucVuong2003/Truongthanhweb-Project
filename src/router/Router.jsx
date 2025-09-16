import React from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ServicePage from '../pages/ServicePage'
import Error404 from '../pages/Error404.jsx'
import PriceList from '../pages/PriceList.jsx'
import WebsiteTemplate from '../pages/WebsiteTemplate.jsx'
import DetailTemplateWebsite from '../pages/DetaiTemplateWebsite.jsx'
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
                    element:<PriceList />
                },
                {
                    path: "mau-website",
                    element: <Outlet />,
                    children: [
                        {
                            path: "",
                            element: <WebsiteTemplate />
                        },
                        {
                        path: ":id",
                        element: <DetailTemplateWebsite />
                    }]
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
