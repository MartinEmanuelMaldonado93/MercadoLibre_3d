import ReactDOM from 'react-dom/client';
import React, { useRef } from "react";
import { createBrowserRouter, RouterProvider, Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from "./Home/Home";
import { Iphone13 } from '@components';
import BuyProduct3D from './BuyProduct3D/BuyProduct3D';

const routerHome = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        // path: "/about",
        // element: <About />
      }
    ]
  },
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode >
    <RouterProvider router={routerHome} />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/buyproduct3d"
           element={
             <BuyProduct3D >
               <Iphone13 />
             </BuyProduct3D>
           } />
      </Routes>
    </BrowserRouter> */}
  </React.StrictMode>
);
