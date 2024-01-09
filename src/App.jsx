import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homepage/Home";
import Navbar from "./components/Navbar/Navbar";
import Emailmarketing from "./pages/email_marketing/Emailmarketing";
import VideoMarketing from "./pages/video_marketing/VideoMarketing";
import Contact from "./pages/contact/Contact";
import About from "./pages/About/About";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/email_marketing" element={<Emailmarketing />} />
        <Route path="/video_marketing" element={<VideoMarketing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/data_science" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
