import { Route, Routes } from "react-router-dom";

import Header from "./components/layout/Header";
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
    </>
  );
}

export default App;