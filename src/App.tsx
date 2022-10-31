import React, { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Page00 from "./pages/Page00";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Page00" element={<Page00 />} />  
    </Routes>
  );
}
