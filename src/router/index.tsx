import App from '../App'
import { BrowserRouter as Router, Routes, Route,Navigate} from 'react-router-dom'
import Home from '../views/Home'

export const baseRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />}>
                <Route path="/" element={<Navigate to="/home"/>} />
                    <Route path="/home" element={<Home />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default baseRouter