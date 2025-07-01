import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/homepage/Home";
import Navbar from "./components/Navbar/Navbar";
import Emailmarketing from "./pages/email_marketing/Emailmarketing";
import VideoMarketing from "./pages/video_marketing/VideoMarketing";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";
import Footer from "./components/footer/Footer";
import DataScience from "./pages/data-science/DataScience";
import Terms from "./pages/Terms/Terms";
import Privacy from "./pages/privacy/Privacy";

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <div>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/email_marketing" element={<Emailmarketing />} />
        <Route path="/video_marketing" element={<VideoMarketing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data_science" element={<DataScience />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
