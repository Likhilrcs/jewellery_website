import "./diamondCollections.css";
import diamondRing from "../../assets/diamond-rings.jpg";
import diamondNecklace from "../../assets/diamond-necklace.jpg";
import diamondEarrings from "../../assets/diamond-earrings.jpg";
import diamondBangle from "../../assets/diamond-bangles.webp";
import diamondBracelet from "../../assets/diamond-bracelet.jpg";
import diamondPendant from "../../assets/diamond-pendent.jpg";
import diamondChain from "../../assets/diamond-chain.jpg";
import diamondNosePin from "../../assets/diamond-nosepin.jpg";
import diamondNecklaceSet from "../../assets/diamond-set-necklace.webp";
import diamondLocket from "../../assets/diamond-locket.jpg";     
import diamondNecklaceGen from "../../assets/diamond-necklace-gen.jpg";
import diamondRing2 from "../../assets/diamond-ring2.jpg";
import {useState} from "react";
function DiamondCollection() {
  const diamondProducts = [
    {
      id: 1,
      name: "Elegant Diamond Ring",
      description:"Elegant diamond ring with timeless sparkle.",
      price: "₹45,999",
      image: diamondRing,
      isAvailable: true,
    },
    {
      id: 2,
      name: "Diamond Necklace",
      description:"Elegant diamond necklace with timeless sparkle.",
      price: "₹1,25,999",
      image: diamondNecklace,
      isAvailable: false,
    },
    {
      id: 3,
      name: "Diamond Earrings",
      description:"Elegant diamond earrings with graceful sparkle.",
      price: "₹65,999",
      image: diamondEarrings,
      isAvailable: true,
    },
    {
      id: 4,
      name: "Designer Diamond Bangle",
      description:"Stylish diamond bangle with a refined diamond design.",
      price: "₹85,999",
      image: diamondBangle,
      isAvailable: true,
    },
    {
      id: 5,
      name: "Diamond Bracelet",
      description:"Elegant diamond bracelet with a brilliant finish.",
      price: "₹72,999",
      image: diamondBracelet,
      isAvailable: true,
    },
    {
      id: 6,
      name: "Diamond Pendant",
      description:"Delicate diamond pendant with timeless charm.",
      price: "₹38,999",
      image: diamondPendant,
      isAvailable: false,
    },
    {
      id: 7,
      name: "Diamond Chain",
      description:"Stylish diamond chain with a sophisticated look.",
      price: "₹95,999",
      image: diamondChain,
      isAvailable: true,
    },
    {
      id: 8,
      name: "Diamond Nose Pin",
      description:"Delicate diamond nose pin with elegant sparkle.",
      price: "₹18,999",
      image: diamondNosePin,
      isAvailable: true,
    },
    {
      id: 9,
      name: "Diamond Necklace Set",
      description:"Beautiful diamond necklace set with matching elegance.",
      price: "₹1,00,000",
      image: diamondNecklaceSet,
      isAvailable: true,
    },
    {
      id: 10,
      name: "Diamond Locket",
      description:"Elegant diamond locket with timeless charm diamond.",
      price: "₹55,999",
      image: diamondLocket,
      isAvailable: true,
    },
    {
      id: 11,
      name: "Diamond-necklace",
      description:"Stunning diamond-set necklace with graceful sparkle.",
      price: "1,25,000",
      image: diamondNecklaceGen,
      isAvailable: true,
    },
    {
      id: 12,
      name: "Diamond-ring2",
      description:"Elegant diamond ring with timeless sparkle ring2.",
      price: "45,000",
      image: diamondRing2,
      isAvailable: true,
    }
  ];
 const [search, setSearch] = useState("");
 const filteredProducts = diamondProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <section className="diamond-section">
      <div className="diamond-heading">
        <div className="search-box-jewellery">
        <input
              type="text"
              placeholder="Search jewellery..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            /> 
      </div>
        <h2>Our Diamond Collection</h2>
        <span>Discover elegance, brilliance and timeless beauty</span>
      </div>
      <h1 className="all-collections">All Collections</h1>
      <div className="diamond-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="diamond-card" key={product.id}>
              <div className="diamond-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>
              <div className="diamond-info">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="view-bottom">
                  <p className="diamond-price">
                    {product.price}
                  </p>
                  <button>View →</button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p>No jewellery found.</p>
        )}
      </div>
    </section>
  );
}

export default DiamondCollection;