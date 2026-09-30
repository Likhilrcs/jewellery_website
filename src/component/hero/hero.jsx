import "./hero.css";
import video from "../../assets/herosectionvideo.mp4";
 
function Hero() {
  return (
    <section className="hero">
 
      <video
        className="hero-video" src={video} autoPlay loop muted playsInline></video>
 
 
      <div className="hero-content">
        <h1>Laxzari Jewellery</h1>
        <p>Elegance that shines forever</p>
        <button>Explore Collection</button>
      </div>
 
    </section>
  );
}
 
export default Hero;