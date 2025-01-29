import "./App.css";
import "./uiKit.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Index from "./views/Index.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./views/Services.jsx";
import Us from "./views/Us.jsx";
import ScrollToTop from "./utils/ScrollToTop";

library.add(faChevronDown);

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/Servicios" element={<Services />} />
        <Route path="/Nosotros" element={<Us />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
