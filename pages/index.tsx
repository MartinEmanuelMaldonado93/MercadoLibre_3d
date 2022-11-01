import ReactDOM from 'react-dom/client';
// import App from '../pages/pages/App';
import { BrowserRouter } from 'react-router-dom';
import React, { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/Page00" element={<Page00 />} /> */}
    </Routes>
  </BrowserRouter>
);
