import { useState } from 'react';
import './global.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import Store from './pages/Store/Store';
import Product from './pages/Product/Product';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Cart from './pages/Cart/Cart';
import Account from './pages/Account/Account';
import Orders from './pages/Orders/Orders';
import Error404 from './pages/Error404/Error404';
import Blogs from './pages/Blogs/Blogs';
import Column from './pages/Column/Column';
import Contact from './pages/Contact/Contact';
import OurStory from './pages/OurStory/OurStory';
import Wishlist from './pages/Wishlist/Wishlist';
import Search from './pages/Search/Search';

// components
import Navbar from './components/Navbar/Navbar';
import Disclaimer from './components/Disclaimer/Disclaimer';
import Footer from './components/Footer/Footer';
import Newsletter from './components/Newsletter/Newsletter';
import Sidebar from './components/Sidebar/Sidebar';
import ImportantLiknks from './components/ImportantLiknks/ImportantLiknks';
import BackToTop from './components/BackToTop/BackToTop';


function App() {
  const [ active, setActive ] = useState(false);
  return (
    <BrowserRouter>
    <BackToTop/>
      <Navbar active={active} setActive={setActive}/>
      <Sidebar active={active} setActive={setActive}/>
      <Routes>
        <Route path="*" element={<Error404/>}/>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/store' element={<Store/>}/>
        <Route exact path='/cart' element={<Cart/>}/>
        <Route exact path='/product/:id' element={<Product/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/myorders' element={<Orders/>}/>
        <Route exact path='/wishlist' element={<Wishlist/>}/>
        <Route exact path='/myaccount' element={<Account/>}/>
        <Route exact path='/blog' element={<Blogs/>}/>
        <Route exact path='/blog/:id' element={<Column/>}/>
        <Route exact path='/story' element={<OurStory/>}/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/search/:query' element={<Search/>}/>
      </Routes>
      <Newsletter/>
      <Disclaimer/>
      <ImportantLiknks/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
