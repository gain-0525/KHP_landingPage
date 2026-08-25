import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import CtaSection from "./components/layout/CtaSection";

import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </main>

      <CtaSection />
      <Footer />
    </>
  );
}

export default App;