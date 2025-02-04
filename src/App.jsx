import "./App.css";
import "./uiKit.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import Index from "./views/Index.jsx";
import Footer from "./components/Footer.jsx";
import Services from "./views/Services.jsx";
import Us from "./views/Us.jsx";
import ScrollToTop from "./utils/ScrollToTop";
import Search from "./views/Search.jsx";
import { AnimatePresence } from "framer-motion";
import { AnimationProvider } from "./utils/AnimationContext.jsx";

library.add(faChevronDown);

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/Servicios" element={<Services />} />
        <Route path="/Nosotros" element={<Us />} />
        <Route path="/Busqueda" element={<Search />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <AnimationProvider>
      <BrowserRouter>
        <NavBar />
        <ScrollToTop />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </AnimationProvider>
  );
}

export default App;
