import { useMemo, useState } from "react";
import "./collection.css";

import Gold from "../../assets/goldCollection.jpg";
import Diamond from "../../assets/diamondCollection.jpg";
import Sliver from "../../assets/silverCollection.jpg";
import image from "../../assets/ribban.png";
import photo from "../../assets/image.png";

function Collections() {

  const [search, setSearch] = useState("");

  const collections = [
    {
      image: Gold,
      title: "Gold Chain",
      description: "Elegant designs crafted for every celebration",
    },
    {
      image: Diamond,
      title: "Diamond Chain",
      description: "Sparkle that makes every moment special",
    },
    {
      image: Sliver,
      title: "Silver Chains",
      description: "Timeless silver crafted with perfection",
    },
  ];

  const filteredCollections = useMemo(() => {
    return collections.filter((item) =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <section className="collections">

      <div className="collection-heading">

        <span>OUR SIGNATURE</span>

        <h2>
          Top <strong>Collections</strong>
        </h2>

        <p>
          Discover exquisite jewellery designed to celebrate
          your most beautiful moments.
        </p>

        <input
          type="text"
          placeholder="Search jewellery..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

      </div>


      <div className="collection-grid">

        {filteredCollections.map((item, index) => (

          <div
            className="collection-card"
            key={index}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="collection-overlay">

              <div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <button>
                  Explore Collection
                </button>

              </div>

            </div>

          </div>

        ))}

      </div>


      <div className="ribban-content">

        <h1>Featured Jewellery Collections</h1>

        <p>
          A selection of jewellery designs across categories
        </p>

      </div>


      <div className="ribban">

        <img
          src={image}
          alt="Featured jewellery"
        />

      </div>


      <div className="image-content">

        <p>
          Trust us to be part of your precious moments and
          to deliver jewellery that
        </p>

        <p>
          you'll cherish forever.
        </p>

      </div>


      <div className="image">

        <img
          src={photo}
          alt="Jewellery"
        />

      </div>

    </section>
  );
}

export default Collections; 