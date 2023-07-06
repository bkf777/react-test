// import Home from '../views/Home.tsx'
// import About from '../views/About.tsx'
import React,{ lazy } from 'react'
import { Navigate } from 'react-router-dom'



const Home = lazy(() => import('../views/Home.tsx'))
const About = lazy(() => import('../views/About.tsx'))

const WithLoadingComponent = (component:JSX.Element) =>(
    <React.Suspense fallback={<div>Loading...</div>}>
    {component}
    </React.Suspense>
)

const Routes = [
    { path: '/', element: <Navigate to="/home" />},
    { path: '/home', element:
    WithLoadingComponent(<Home />)
    },
    { path: '/about', element:
    WithLoadingComponent(<About />)
},

]

export default Routes