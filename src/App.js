import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home';
import About from './Components/About';
import Shop from './Components/Shop';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
function App() {
  return (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/cart" element={<Cart/>}/>
          </Routes>
          <Footer />
        </BrowserRouter>
  );
}

export default App;
