import ReactDOM from 'react-dom/client';
// import App from '../pages/pages/App';
import { BrowserRouter } from 'react-router-dom';
import React, { useRef } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import BuyProduct3D from './BuyProduct3D/BuyProduct3D';
import { Iphone13 } from '@components';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={
        <Home /> 
      } />
      <Route path="/BuyProduct3D"
        element={
          <BuyProduct3D >
            <Iphone13 />
          </BuyProduct3D>
        } />
    </Routes>
  </BrowserRouter>
);
