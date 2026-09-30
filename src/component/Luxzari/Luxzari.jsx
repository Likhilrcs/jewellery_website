import "./Luxzari.css";

import jewellery1 from "../../assets/special.jpg";
import jewellery2 from "../../assets/special1.jpg";
import jewellery3 from "../../assets/special2.jpg";
import jewellery4 from "../../assets/special3.jpg";
import photo from "../../assets/gold.jpg";
import image from "../../assets/god2.jpg"


function Luxzari() {

  const collections = [
    {
      image: jewellery1,
      title: "Royal Gold",
      text: "Timeless elegance"
    },
    {
      image: jewellery2,
      title: "Diamond Glow",
      text: "Shine with luxury"
    },
    {
      image: jewellery3,
      title: "Laxzari Classic",
      text: "Designed for elegance"
    },
    {
      image: jewellery4,
      title: "Luxury Collection",
      text: "Beauty that lasts forever"
    }
  ];


  return (
    <div className="luxzari-container">


      <section className="luxzari-section">

        <h2>Laxzari Collection</h2>

        <p>
          Discover our exclusive jewellery collection
        </p>


        <div className="luxzari-grid">

          {collections.map((item, index) => (

            <div
              className={`luxzari-card card-${index + 1}`}
              key={index}
            >

              <img
                src={item.image}
                alt={item.title}
              />


              <div className="luxzari-content">

                <h3>{item.title}</h3>

                <p>{item.text}</p>

              </div>

            </div>

          ))}

        </div>

      </section>
      <section className="image-container">

        <div className="photo">

          <img
            src={photo}   alt="photo"    />
           <div className="photo-content">
               <p>Sacred Collection</p>
                    <h1>Divine Idols</h1>
                  <p>
              Sacred idols crafted in fine gold and silver,
              designed to</p> 
              <p>elevate every sacred space.</p>
           

            </div>

        </div>

      </section>
      <section className="photo-content">
        <div className="photo1 img">
          <img src={image} alt="photo" />
          <div className="photo1-content">
            <h1>“A Touch of Luxury, A Lifetime of Elegance.”</h1>
            <p>Celebrate Every Moment with,</p> <p>a Little More Sparkle.</p>
          </div>
        </div>
      </section>

    </div>
  );
}


export default Luxzari;