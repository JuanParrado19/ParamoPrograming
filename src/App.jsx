import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import Index from './views/Index.jsx';
import Footer from './components/Footer.jsx';
import Services from './views/Services.jsx'

library.add(faChevronDown);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Servicios" element={<Services />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
