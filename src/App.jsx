import { useState } from 'react'
import Gallary from './component/Gallary/GalleryOfGold.jsx' 
import Gold from './component/Gold/GoldPage.jsx'
import Navbar from './component/Navbar/Navbar.jsx'
import './App.css'
import './component/Navbar/Navbar.css'

function App() {
 const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <nav className="navbar">
      <div className="navbar-logo">
 
        <div>
          <h2>Laxzari</h2>
          <p>JEWELLERY</p>
        </div>
      </div>
 
 
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#collections">Collections</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#new">New Arrivals</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#cart"> Cart</a></li>
          <li><button onClick={toggleTheme}>theame</button></li>
        </ul>
  
  
        <div className="navbar-actions">
            <button className="login-btn">Login </button>
        </div>
  </nav>
      <Gold />
      <Gallary />
    </div>
  
  );  

}

export default App
