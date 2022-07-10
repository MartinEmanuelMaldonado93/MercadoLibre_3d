import React, { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Page00 from "./pages/Page00";
import Page01 from "./pages/Page01";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Page00" element={<Page00 />} /> 
      <Route path="/Page00/Page01" element={<Page01 />} />
    </Routes>
  );
}
