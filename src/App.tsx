import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import SobreNos from "./pages/SobreNos";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import NotFound from "./pages/NotFound";
import ListCaronas from "./pages/ListCaronas";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<SobreNos />} />
          <Route path="/caronas" element={<ListCaronas />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
