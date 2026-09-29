import "./categorySection.css";

import diamondRingsImage from "../../assets/diamond-ring-hand.jpg";
import diamondEarringsImage from "../../assets/diamond-earrings-earrings.jpg";
import diamondNecklacesImage from "../../assets/diamond-necklace-necklace.jpg";
import diamondBraceletsImage from "../../assets/diamond-bracelets-bracelet.jpg";
import diamondChainsImage from "../../assets/diamond-chains-chain.jpg";

function CategorySection() {
  const categories = [
    {
      name: "Diamond Rings",
      image: diamondRingsImage,
    },
    {
      name: "Diamond Chains",
      image: diamondChainsImage,
    },
    {
      name: "Diamond Earrings",
      image: diamondEarringsImage,
    },
    {
      name: "Diamond Necklaces",
      image: diamondNecklacesImage,
    },
    {
      name: "Diamond Bracelets",
      image: diamondBraceletsImage,
    },
  ];

  return (
    <section className="category-section">
      <h1 className="explore-text">Explore By Category</h1>
      <div className="cards-container">
        {categories.map((category) => (
          <div className="card" key={category.name}>
            <img src={category.image} alt={category.name}/>
            <div className="category-overlay"></div>
            <h3>{category.name}</h3>
            <button className="explore-button">Explore</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategorySection;
