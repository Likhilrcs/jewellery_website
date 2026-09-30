import { useState } from "react";
import Gold from './component/Gold/GoldPage.jsx'
import "./component/navbar/navbar.css";
import Hero from "./component/hero/hero.jsx";
import Collections from "./component/collections/collection.jsx";
import Luxzari from "./component/Luxzari/luxzari.jsx";
import Scrolling from "./component/scrollingimg/scrollimg.jsx";
import Footer from "./component/footer/footer.jsx";
import Gallary from "./component/Gallary/GalleryOfGold.jsx";
import DiamondHero from "./component/diamondHero/diamondHero.jsx";
import CategorySection from "./component/categorySection/categorySection.jsx";
import DiamondCollection from "./component/diamonds/diamondCollections.jsx";
import CustomJewellery from "./component/customJewellery/customJewellery.jsx";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <nav className="navbar">

        <div className="navbar-logo">
        </div>

        <div className="brand">
          <h2>Laxzari</h2>
          <p>JEWELLERY</p>
        </div>

        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#collections">Collections</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#new">New Arrivals</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#cart">Cart</a></li>

          <li>
            <button className="theme-btn" onClick={toggleTheme}>
              {darkMode ? " Light" : "Dark"}
            </button>
          </li>
        </ul>

        <div className="navbar-actions">
          <button className="login-btn">Login</button>
        </div>

      </nav>

      <main>
        <Hero />
        <Collections />
        <Luxzari />
        <Scrolling />
         <Gold />
        <Gallary />
        <DiamondHero/>
        <CategorySection/>
        <DiamondCollection/>
        <CustomJewellery/>
        <Footer />
      </main>
        
    </div>
  );
}

export default App;
