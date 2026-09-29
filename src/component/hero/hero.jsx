import "./hero.css"; 
import video1 from "../../assets/MicrosoftTeams-video (1).mp4";
import video2 from "../../assets/MicrosoftTeams-video (2).mp4";
import video3 from "../../assets/MicrosoftTeams-video.mp4";
function Hero() { 
        const videos=[
            video1,video2,video3];
            function changeVideo(event) { 
                const video = event.currentTarget; 
                let index = Number(video.dataset.index); 
                index = (index + 1) % videos.length; 
                video.dataset.index = index; 
                video.src = videos[index]; 
                video.play(); 
            }
    return ( 
    <section className="hero"> 
    <video className="hero-video" src={videos[0]} autoPlay muted loop playsInline /> 
    <video className="hero-video" src={videos[1]} autoPlay muted loop playsInline />
    <video className="hero-video" src={videos[2]} autoPlay muted loop playsInline />
    <div className="hero-overlay"></div> 
    <div className="hero-content"> 
        <p className="small-title"> TIMELESS ELEGANCE </p> 
        <h1> Jewellery That <br /> Tells Your Story </h1> 
        <p className="hero-text"> Discover our exclusive collection of gold, diamond and silver jewellery.</p> 
        <div className="hero-buttons"> 
            <button className="shop-btn"> Shop Collection </button> 
            <button className="explore-btn"> Explore Jewellery </button> 
        </div> 
    </div> 
    </section> 
    ); 
} 
export default Hero;