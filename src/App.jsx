import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilPage";
import KaigoPage from "./pages/KaigoPage";
import TGPage from "./pages/TGPage";
import KontakPage from "./pages/KontakPage";
import RyuugakuPage from "./pages/RyuugakuPage";
import GijinkokuPage from "./pages/GijinkokuPage";
import GalleryPage from "./pages/GaleriPage";
import OnrainPage from "./pages/OnrainPage";
import BiayaProsesPage from "./pages/BiayaProsesPage";
import "aos/dist/aos.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/kaigo" element={<KaigoPage />} />
        <Route path="/tokutei-ginou" element={<TGPage />} />
        <Route path="/kontak" element={<KontakPage />} />
        <Route path="/ryuugaku" element={<RyuugakuPage />} />
        <Route path="/gijinkoku" element={<GijinkokuPage />} />
        <Route path="/nihongo-onrain-juku" element={<OnrainPage />} />
        <Route path="/galeri" element={<GalleryPage />} />
        <Route path="/biaya-proses" element={<BiayaProsesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
