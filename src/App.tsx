import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CtaSection from "./components/layout/CtaSection";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProgramsPage from "./pages/ProgramsPage";
import SpacePage from "./pages/SpacePage";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/space" element={<SpacePage />} />
        </Routes>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

export default App;