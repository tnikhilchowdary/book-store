import './App.css';
import SignUp from "./pages/Signup";
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Inventions from "./pages/Inventions.js";
import Programming from "./pages/Programming.js";
import Technology from "./pages/Technology.js";
import Communications from "./pages/Communications.js"; 
import Navbar from './components/Navbar.js';
import { useState } from 'react';
import CartProvider from './components/CartContext.js';
import CartPage from './pages/CartPage.js';



function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
     <CartProvider>
  <Router>
    <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/home" element={<Home searchTerm={searchTerm}/>} />
      <Route path="/programmming" element={<Programming searchTerm={searchTerm}/>} />
      <Route path="/technology" element={<Technology searchTerm={searchTerm} />} />
      <Route path="/inventions" element={<Inventions searchTerm={searchTerm} />} />
      <Route path="/communications" element={<Communications searchTerm={searchTerm} />} /> 
       <Route path="/cart" element={<CartPage />} /> 
    </Routes>
  </Router>
</CartProvider>

    </div>
  );
}

export default App;
