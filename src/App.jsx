import { Routes, Route } from "react-router-dom";
import Principal from "./Components/Principal/Principal";
import MainLayout from "./Main/MainLayout"; // descomenta si la usas

import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="Inicio/*" element={<MainLayout />} />
    </Routes>
  );
}

export default App;
