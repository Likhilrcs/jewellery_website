import React, { useState } from "react";
import "./GoldPage.css";
import GalleryOfGold from "../Gallary/GalleryOfGold.jsx";
import video from '../../assets/goldVideo.mp4'
import GoldNecklace from '../../assets/GoldNecklace.jpg'
import GoldBracelet from '../../assets/GoldBracelet.jpg'
import GoldRing from '../../assets/GoldRing.jpg'
import GoldEarrings from '../../assets/GoldEarrings.jpg'
import Necklace from '../../assets/Necklace.jpg'
import Ring2 from '../../assets/GoldRing2.jpg'
import Ring3 from '../../assets/Ring3.jpg'
import Ring4 from '../../assets/Ring4.jpg'
import Ring5 from '../../assets/Ring5.jpg'
import poster1 from '../../assets/poster1.jpg'
import poster3 from '../../assets/poster3.jpg'
import collection1 from '../../assets/collection1.jpg'
import collection2 from '../../assets/collection2.jpg'
import collection3 from '../../assets/collection3.jpg'
import collection4 from '../../assets/collection4.jpg'
import collection5 from '../../assets/collection5.jpg'

function GoldPage() {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");

  const jewelry = [
    {
      id: 1,
      name: "Necklace",
      category: "Necklace",
      price: 25000,
      image: GoldNecklace
    },
    {
      id: 2,
      name: "Ring",
      category: "Ring",
      price: 35000,
      image: GoldRing
    },
    {
      id: 3,
      name: "Earrings",
      category: "Earrings",
      price: 12000,
      image: GoldEarrings
    },
    {
      id: 4,
      name: "Gold Bracelet",
      category: "Bracelet",
      price: 18000,
      image: GoldBracelet
    },
    {
      id: 5,
      name: "Necklace",
      category: "Necklace",
      price: 50000,
      image: Necklace
    },
    {
      id: 6,
      name: "Gold Ring",
      category: "Ring",
      price: 10000,
      image: Ring2
    },
    {
      id: 7,
      name: "Gold Ring",
      category: "Ring",
      price: 10000,
      image: Ring3
    },
    {
      id: 8,
      name: "Gold Ring",
      category: "Ring",
      price: 10000,
      image: Ring4
    },
    {
      id: 9,
      name: "Gold Ring",
      category: "Ring",
      price: 10000,
      image: Ring5
    }
  ];

  const collections = [
  {
    id: 1,
    title: "Royal Gold",
    description: "Timeless designs crafted to make every moment unforgettable.",
    image: collection1
  },
  {
    id: 2,
    title: "Gold Ring",
    description: "A refined collection meet classic gold.",
    image: collection4
  },
  {
    id: 3,
    title: "Wedding Collection",
    description: "Inspired by tradition, designed for the modern generation.",
    image: collection3
  },
  {
    id: 4,
    title: "Everyday Gold",
    description: "Minimal, graceful pieces made for your everyday moments.",
    image: collection5
  },
  {
    id: 5,
    title: "Bridal Dreams",
    description: "Statement jewellery created for your most beautiful day.",
    image: collection2
  },
];


  const filteredJewelry = jewelry.filter((item) => {
    const categoryMatch =
      category === "All" || item.category === category;

    const searchMatch =
      item.name.toLowerCase().includes(search.toLowerCase());

    return categoryMatch && searchMatch;
  });

  return (
    <div className="jewelry-page">

      {/* Video */}
      <div className="video-box">
        <video
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src={video}
            type="video/mp4"
          />
        </video>


        <div className="video-content">
          <p>OUR COLLECTION</p>
          <h1>Jewelry That<br />Tells Your Story</h1>
          <button>Explore Collection</button>
        </div>
      </div>
      {/* poster */}

      <div className="poster1">
          <img src={poster1} alt="poster1" />
      </div>


      <section className="new-collection">
      <div className="collection-heading">
        <span className="collection-subtitle">THE NEW EDIT</span>

        <h2>
          Discover Our <span>New Collection</span>
        </h2>

        <p>
          Explore exquisite gold jewellery designed with timeless elegance,
          modern craftsmanship, and a touch of luxury.
        </p>
      </div>

      <div className="collection-grid">
        {collections.map((collection) => (
          <article
            className="collection-card"
            key={collection.id}
            style={{ backgroundImage: `url(${collection.image})` }}
          >
            <div className="collection-overlay"></div>

            <div className="collection-content">
              <span className="collection-number">
                0{collection.id}
              </span>

              <div>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>

                <button className="collection-btn">
                  Explore Collection
                  <span>→</span>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>

      {/* Jewelry Section */}
      <div className="jewelry-section">

        <div className="heading">
          <div>
            <p>DISCOVER</p>
            <h2>Our Jewelry</h2>
          </div>

          <span>
            {filteredJewelry.length} Products
          </span>
        </div>

        {/* Filters */}
        <div className="filters">

          <input
            type="text"
            placeholder="Search jewelry..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button
            className={category === "All" ? "active" : ""}
            onClick={() => setCategory("All")}
          >
            All
          </button>

          <button
            className={category === "Necklace" ? "active" : ""}
            onClick={() => setCategory("Necklace")}
          >
            Necklaces
          </button>

          <button
            className={category === "Ring" ? "active" : ""}
            onClick={() => setCategory("Ring")}
          >
            Rings
          </button>

          <button
            className={category === "Earrings" ? "active" : ""}
            onClick={() => setCategory("Earrings")}
          >
            Earrings
          </button>

          <button
            className={category === "Bracelet" ? "active" : ""}
            onClick={() => setCategory("Bracelet")}
          >
            Bracelets
          </button>

        </div>

        {/* Cards */}
        <div className="jewelry-grid">

          {filteredJewelry.map((item) => (
            <div className="jewelry-card" key={item.id}>

              <div className="card-image">
                <img
                  src={`${item.image}?auto=format&fit=crop&w=700&q=80`}
                  alt={item.name}
                />

                <button className="heart">
                  ♡
                </button>
              </div>

              <div className="card-info">

                <p>{item.category}</p>

                <h3>{item.name}</h3>

                <div className="card-bottom">
                  <strong>
                    ₹{item.price.toLocaleString("en-IN")}
                  </strong>

                  <button>
                    View →
                  </button>
                </div>

              </div>

            </div>
          ))}

        </div>
        
      
        
      </div>

      
      
    </div>
  );
}

export default GoldPage;