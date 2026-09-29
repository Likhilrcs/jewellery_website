import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">

        <div>
          <h2>Laxzari</h2>
          <p>JEWELLERY</p>
        </div>
      </div>

  
      <ul className="navbar-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#collections">Collections</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#new">New Arrivals</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#cart"> Cart</a></li>
        <li><button>🌙</button></li>
      </ul>

  
      <div className="navbar-actions">
 <button className="login-btn">Login </button>
       </div>
</nav>
  );
}

export default Navbar;