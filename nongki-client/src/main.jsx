import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Order from './pages/Order';
import MapVIP from './pages/MapVIP';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/order" element={<Order />} />
        <Route path="/map-vip" element={<MapVIP />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
