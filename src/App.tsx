import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import Productinfo from './components/Productinfo/Productinfo';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Productinfo />} />
          <Route path="/add-product" element={<CreateProduct />} />
          <Route path="*" element={<Home/>} />
          <Route path="/category/:category" element={<Home />} />
          <Route path="/404" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
