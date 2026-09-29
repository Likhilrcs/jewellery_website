import { useState } from 'react'

import Gold from './component/Gold/GoldPage.jsx'
import Navbar from "./component/navbar/navbar.jsx";
import Hero from "./component/hero/hero.jsx";
import DiamondHero from "./component/diamondHero/diamondHero.jsx"
import CategorySection from "./component/categorySection/categorySection.jsx";
import DiamondCollection from "./component/diamonds/diamondCollections.jsx";
import Footer from "./component/footer/footer.jsx";
import CustomJewellery from "./component/customJewellery/customJewellery.jsx";
import Cart from "./component/addToCartSection/addToCart.jsx";


function App() {
    const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode((previousMode) => !previousMode);
  };
  return (
    <div className={darkMode ? "app dark" : "app light"}>

      <Navbar
        darkMode={darkMode}
        toggleTheme={toggleTheme}
      />

      <main>
         <Hero/>

        <DiamondHero />

        <CategorySection />

        <DiamondCollection />

        <CustomJewellery />

       <Gold />
      </main>

      <Footer />
        
      <Cart/>
      
    </div>

  );  

}

export default App
