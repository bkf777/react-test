import App from '../App'
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import Home from '../views/Home'
import About from '../views/About'

export const baseRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                <Route path="/" element={<Navigate to="/home"/>} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default baseRouter