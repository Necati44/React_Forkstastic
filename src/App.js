import React from "react";
import Home from "./pages/Home";
import DetailPage from "./pages/DetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/Site.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/detail" element={<DetailPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
