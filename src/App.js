import './App.css';
import Navbaar from './components/header/Navbaar';
import Newnav from './components/newnavbaar/Newnav';
import Maincomp from './components/home/Maincomp';
import Footer from './components/footer/Footer';
import Sign_in from './components/signup_sign/Sign.in';
import SIgnUp from './components/signup_sign/SIgnUp';
import Cart from './components/cart/Cart';
import Buynow from './components/buynow/Buynow';
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
    <Navbaar/>
    <Newnav/>
    <Routes>
    <Route path="/"  element={<Maincomp />} />
      <Route path="/login"  element={<Sign_in />} />
      <Route path="/register" element={<SIgnUp />} />
      <Route path="/getproductsone/:id" element={<Cart />} />
      <Route path="/buynow" element={<Buynow />} />
    </Routes>
    
    <Footer/>
    </>
  );
}

export default App;
