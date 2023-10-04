import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../components/Home/Home";
import Treatment from "../components/Tratamento";
import Consolidation from "../components/Concatenacao";
import Verify from "../components/Analise";
import NavBar from "../components/NavBar/NavBar";

function RoutesApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tratamento" element={<Treatment />} />
        <Route path="/consolidacao" element={<Consolidation />} />
        <Route path="/analise" element={<Verify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
