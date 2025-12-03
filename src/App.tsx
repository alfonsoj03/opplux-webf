import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";

export default function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-white text-gray-900 selection:bg-black selection:text-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/nosotros" element={<About />} />
            <Route path="/productos" element={<Products />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}