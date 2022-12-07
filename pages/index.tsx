import ReactDOM from 'react-dom/client';
import React, { useRef } from "react";
import { createBrowserRouter, RouterProvider, Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from "./Home/Home";
import BuyProduct3D from './BuyProduct3D/BuyProduct3D';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buyproduct3d" element={<BuyProduct3D />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
