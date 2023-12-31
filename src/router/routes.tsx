// import Home from '../views/Home.tsx'
// import About from '../views/About.tsx'
import React, { Children, lazy } from 'react'
import { Navigate } from 'react-router-dom'
import WithLoadingComponent from '../components/loading.tsx'
import Login from '../views/login/index.tsx'

const CustomsHome = lazy(() => import('../custom-view/Home.tsx'))
const Home = lazy(() => import('../views/Home.tsx'))
const Page1 = lazy(() => import('../views/page/page1.tsx'))
const Page2 = lazy(() => import('../views/page/page2.tsx'))
const Page3 = lazy(() => import('../views/page/page3.tsx'))





const Routes = [
    //管理路由
    {
        path: '/',
        element: WithLoadingComponent(<Home />),
        children: [
            {
                path: '/page1',
                element: WithLoadingComponent(<Page1 />)
            },
            {
                path: '/page2',
                element: WithLoadingComponent(<Page2 />)
            },
            {
                path: '/page3/page1',
                element: WithLoadingComponent(<Page3 />)
            },
            {
                path: '/page3/page2',
                element: WithLoadingComponent(<Page2 />)
            },
            {
                path: '/page4/page1',
                element: WithLoadingComponent(<Page1 />)
            },
            {
                path: '/page4/page2',
                element: WithLoadingComponent(<Page2 />)
            },
        ]
    },
    {
        path: '/login',
        element: <Login />,
    },
    //客户端路由
    {
        path: '/customs',
        element: WithLoadingComponent(<CustomsHome />),
    },
    {
        path: '*',
        element: <Navigate to="/customs" />
    },
]

export default Routes