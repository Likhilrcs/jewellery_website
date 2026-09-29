import React from "react";
import "./GalleryOfGold.css";

const galleryImages = [
  {
    image:
      "https://i.pinimg.com/1200x/65/ca/d0/65cad0d82c0b0b331c769f474a425a10.jpg",
    title: "Golden Elegance",
    collection: "Signature Collection",
  },
  {
    image:
      "https://i.pinimg.com/736x/39/cd/3a/39cd3a203adb5c3569cce3841f72d145.jpg",
    title: "Royal Necklace",
    collection: "Royal Gold",
  },
  {
    image:
      "https://i.pinimg.com/736x/03/84/19/0384192940cf4287d6f63e88cae7126b.jpg",
    title: "Diamond Glow",
    collection: "Diamond Collection",
  },
  {
    image:
      "https://i.pinimg.com/736x/f5/ab/e6/f5abe6e1100cae36177cc2680cd1d828.jpg",
    title: "Golden Details",
    collection: "Everyday Gold",
  },
  {
    image:
      "https://i.pinimg.com/736x/5f/81/54/5f81544b2e8f198ff704299998518ba5.jpg",
    title: "Bridal Grace",
    collection: "Bridal Collection",
  },
  {
    image:
      "https://i.pinimg.com/736x/0b/c2/76/0bc2765e5e64cb9eda439f46c3f080ce.jpg",
    title: "Classic Gold",
    collection: "Heritage Collection",
  },
  {
    image:
      "https://i.pinimg.com/1200x/ed/46/99/ed4699c3599e49422aff05344c113863.jpg",
    title: "Modern Gold",
    collection: "Contemporary Collection",
  },
  {
    image:
      "https://i.pinimg.com/736x/e7/b0/19/e7b01930b13915f3c4159a0ceac527a1.jpg",
    title: "Timeless Beauty",
    collection: "Classic Collection",
  },
];

const GalleryCard = ({ item }) => {
  return (
    <div className="gold-gallery-card">
      <div
        className="gold-gallery-image"
        style={{ backgroundImage: `url(${item.image})` }}
      >
        <div className="gold-gallery-overlay"></div>

        <div className="gold-gallery-info">
          <span>{item.collection}</span>
          <h3>{item.title}</h3>
        </div>
      </div>
    </div>
  );
};

const GalleryOfGold = () => {
  // Duplicate images so the animation can loop seamlessly
  const firstRow = [...galleryImages, ...galleryImages];
  const secondRow = [...galleryImages.slice(4), ...galleryImages, ...galleryImages.slice(0, 4)];

  return (
    <section className="gallery-of-gold">
      {/* Header */}
      <div className="gold-gallery-heading">
        <span className="gold-gallery-label">OUR WORLD OF GOLD</span>

        <h2>
          Gallery of <em>Gold</em>
        </h2>

        <p>
          A glimpse into our world of craftsmanship, timeless beauty and
          unforgettable jewellery moments.
        </p>
      </div>

      {/* First moving row */}
      <div className="gallery-track-wrapper">
        <div className="gallery-track gallery-track-right">
          {firstRow.map((item, index) => (
            <GalleryCard
              item={item}
              key={`row-one-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Second moving row */}
      <div className="gallery-track-wrapper second-track">
        <div className="gallery-track gallery-track-left">
          {secondRow.map((item, index) => (
            <GalleryCard
              item={item}
              key={`row-two-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Bottom text */}
      <div className="gallery-bottom">
        <span>CRAFTED WITH PASSION</span>
        <span className="gallery-dot">•</span>
        <span>DESIGNED FOR ETERNITY</span>
      </div>
    </section>
  );
};

export default GalleryOfGold;