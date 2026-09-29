
import "./scrolling.css";
function Scrolling() {

  const images = [

    {
      id: 1,
      image: "https://i.pinimg.com/736x/d7/94/8d/d7948d1ff652ed6c130600150c38f0c7.jpg",
      title: "Gold Earrings",
      description: "Elegant diamond necklace designed for timeless beauty."
    },

    {
      id: 2,
      image: "https://i.pinimg.com/1200x/be/4f/18/be4f18d0e679fee584b7b0323aee0e6b.jpg",
      title: "Luxury Chain",
      description: "Beautifully crafted ring for every special occasion."
    },

    {
      id: 3,
      image: "https://i.pinimg.com/736x/d5/7c/0a/d57c0a8797a272d74c8fbf4afc3894d7.jpg",
      title: "Sliver chain",
      description: "Traditional gold bangles with a modern touch."
    },

    {
      id: 4,
      image: "https://i.pinimg.com/736x/d0/da/d8/d0dad81a41dd04f128772d5602757e97.jpg",
      title: "Diamond Chain",
      description: "A stunning diamond chain made for elegance."
    },
    {
      id: 5,
      image: "https://i.pinimg.com/736x/92/78/37/9278377b5f9766cd6792426eece0eb29.jpg",
      title: "Diamond Necklace",
      description: "Elegant diamond necklace designed for timeless beauty."
    },
    

  ];


  return (

    <section className="scroll-section">

      <div className="scroll-track">

        {images.map((item) => (

          <div
            className="jewellery-card"
            key={item.id}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="jewellery-info">

              <h2>
                {item.title}
              </h2>

              <p>
                {item.description}
              </p>

            </div>

          </div>

        ))}
        {images.map((item) => (

          <div
            className="jewellery-card"
            key={`duplicate-${item.id}`}
          >

            <img
              src={item.image}
              alt={item.title}
            />

            <div className="jewellery-info">

              <h2>
                {item.title}
              </h2>

              <p>
                {item.description}
              </p>

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}


export default Scrolling;
