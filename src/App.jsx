import React from "react";
import { Route, Routes } from "react-router-dom";
import MyNamaz from "./pages/MyNamaz";
import Tasbeh from "./pages/Tasbeh";
import Weather from "./pages/Weather";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MyNamaz />} />
        <Route path="/tasbeh" element={<Tasbeh />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </>
  );
};

export default App;
