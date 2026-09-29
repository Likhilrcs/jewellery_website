import "./customJewellery.css";
import diamondRingBanner from "../../assets/ringbanner.mp4";
function CustomJewellery() {
  return (
    <section className="ring-banner">
      <video src={diamondRingBanner} autoPlay loop muted playsInline/>
      <div className="ring-banner-overlay"></div>
      <div className="banner-content">
        <span className="banner-small-title">CUSTOM JEWELLERY</span>
        <h1>Timeless Diamond Elegance</h1>
        <h1>100% Authentic Diamonds</h1>
        <p>Discover brilliance crafted to make every special moment unforgettable.</p>
        <button className="create-ring-btn"> Create Your Own Ring <span>→</span></button>
      </div>
      <div className="custom-process">
        <h3>How Your Jewellery Is Made</h3>
        <div className="process-step">
          <div>
            <h4>Choose Your Design</h4>
            <p>Select your preferred ring style, metal and diamond.</p>
          </div>
        </div>
        <div className="process-step">
          <div>
            <h4>Custom Design</h4>
            <p>Our designers create your personalised jewellery design.</p>
          </div>
        </div>
        <div className="process-step">
          <div>
            <h4>Expert Crafting</h4>
            <p>Skilled artisans carefully craft your unique piece.</p>
          </div>
        </div>
        <div className="process-step">
          <div>
            <h4>Quality Check</h4>
            <p>Every detail is inspected before your jewellery is delivered.</p>
          </div>
        </div>
      </div>

    </section>
  );
}

export default CustomJewellery;
