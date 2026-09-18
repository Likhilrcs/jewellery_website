import React from "react";
import "./GalleryOfGold.css";

const galleryImages = [
  {
    image:
      "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85",
    title: "Golden Elegance",
    collection: "Signature Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85",
    title: "Royal Necklace",
    collection: "Royal Gold",
  },
  {
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85",
    title: "Diamond Glow",
    collection: "Diamond Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85",
    title: "Golden Details",
    collection: "Everyday Gold",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=900&q=85",
    title: "Bridal Grace",
    collection: "Bridal Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85",
    title: "Classic Gold",
    collection: "Heritage Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=900&q=85",
    title: "Modern Gold",
    collection: "Contemporary Collection",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&w=900&q=85",
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