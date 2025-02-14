import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from './components/NavBar.jsx'
import './index.css'
import '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core'
import 'animate.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
