import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import { faChevronDown,faEnvelope,faPhone,faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare';
import { library } from '@fortawesome/fontawesome-svg-core';
import Index from './views/Index.jsx';
import Footer from './components/Footer.jsx';
import Services from './views/Services.jsx'
import Contact from './views/Contact.jsx'

library.add(faChevronDown,faEnvelope,faPhone,faLocationDot,faInstagramSquare);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Servicios" element={<Services />} />
        <Route path="/Contactanos" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
