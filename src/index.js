import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Products from './pages/Products';
import Product from './pages/Product';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App/> }>
          <Route index element={ <Home /> }></Route>
          <Route path='about' element={ <About/> }></Route>
          <Route path='contact' element={ <Contact /> }></Route>
          <Route path='products' element={ <Products /> }>
            <Route index element= {
              <h3 style={{fontSize: "22px", marginTop: "10px"}}>LapTops</h3>
            }
            />
          </Route>
          <Route path='products/:productId' element={ <Product /> }></Route>
          <Route
            path="*"
            element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
);