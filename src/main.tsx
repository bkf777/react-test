import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import 'reset-css'
import "@/assets/styles/global.scss"
import Router from './router/index.tsx'
import { BrowserRouter as Router1 } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Router /> */}
  <Router1>
    <App />
  </Router1>
  </React.StrictMode>,
)
