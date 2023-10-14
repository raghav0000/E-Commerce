import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { store } from './redux/store';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Shop from './pages/Shop';
import ContactUs from './pages/ContactUs';
import CheckOut from './pages/CheckOut';
import AboutUs from './pages/AboutUs';
import Help from './pages/Help';
import Faq from './pages/Faq';
import Detail from './pages/Detail';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store = {store}>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/shop" element={<Shop/>}/>
    <Route path="/contact" element={<ContactUs/>}/>
    <Route path="/checkout" element={<CheckOut/>}/>
    <Route path="/about" element={<AboutUs/>}/>
    <Route path="/help" element={<Help/>}/>
    <Route path="/faq" element={<Faq/>}/>
    <Route path="/detail" element={<Detail/>}/>
   </Routes>
   </BrowserRouter>
  </Provider>
   
);
 