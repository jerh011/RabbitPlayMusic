import { Routes, Route } from "react-router-dom";
import Principal from "./Components/Principal/Principal";
import MainPage from "./Main/MainPage"; // descomenta si la usas

import "./app.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="Inicio/*" element={<MainPage />} />
    </Routes>
  );
}

export default App;
