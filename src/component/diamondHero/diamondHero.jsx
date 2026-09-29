import "./diamondHero.css";
import diamondBgVideo from "../../assets/diamond-video.mp4";
function DiamondHero() {
  return (
    <section className="diamond-hero">
      <video className="diamond-hero-video" src={diamondBgVideo} autoPlay loop muted playsInline/>
      <div className="diamond-hero-overlay"></div>
      <div className="diamond-hero-content">
        <span className="diamond-small-text">LAXZARI DIAMOND COLLECTION</span>
        <h1>Our Diamond Jewellery</h1>
        <p>Discover brilliance that lasts forever.</p>
        <p className="diamond-description">
          Explore our exquisite collection of diamond rings,necklaces, earrings, bracelets and more, crafted with elegance and designed to celebrate your most precious moments.</p>
        <button className="diamond-explore-btn">Explore Collection <span>→</span></button>
      </div>
    </section>
  );
}

export default DiamondHero;
