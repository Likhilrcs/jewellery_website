import "./addToCart.css";
import {useState,useEffect} from "react";
function Cart() {
  const diamondProducts = [];
  // Get cart from localStorage when the app starts
   const [search, setSearch] = useState("");

  // Cart state
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("diamondCart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart whenever cart changes
  useEffect(() => {
    localStorage.setItem("diamondCart", JSON.stringify(cart));
  }, [cart]);

  // Add product to cart
  const addToCart = (product) => {
    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      setCart(
          cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: 1,
        },
      ]);
    }
  };

  // Increase quantity
  const increaseQuantity = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      )
    );
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove product
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // Convert price string into number
  const getPrice = (price) => {
    return Number(price.replace(/[₹,]/g, ""));
  };

  // Total quantity
  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Total price
  const totalPrice = cart.reduce(
    (total, item) =>
      total + getPrice(item.price) * item.quantity,
    0
  );

  // Search products
  const filteredProducts = diamondProducts.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
   
        <section className="cart-section">

          <div className="cart-title">

            <h2>Shopping Cart 🛒</h2>

            <span>
              {totalItems} item
              {totalItems !== 1 ? "s" : ""}
            </span>

          </div>


          {cart.length === 0 ? (

            <div className="empty-cart">

              <h3>Your cart is empty</h3>

              <p>
                Add some beautiful diamond jewellery
                to your cart.
              </p>

            </div>

          ) : (

            <>

              <div className="cart-items">

                {cart.map((item) => (

                  <div
                    className="cart-item"
                    key={item.id}
                  >

                    <img
                      src={item.image}
                      alt={item.name}
                    />


                    <div className="cart-product">

                      <h3>{item.name}</h3>

                      <p>{item.description}</p>

                      <strong>{item.price}</strong>

                    </div>


                    <div className="quantity">

                      <button
                        onClick={() =>
                          decreaseQuantity(item.id)
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          increaseQuantity(item.id)
                        }
                      >
                        +
                      </button>

                    </div>


                    <div className="item-total">

                      <strong>
                        ₹
                        {(
                          getPrice(item.price) *
                          item.quantity
                        ).toLocaleString("en-IN")}
                      </strong>

                    </div>


                    <button
                      className="remove-button"
                      onClick={() =>
                        removeFromCart(item.id)
                      }
                    >
                      Remove
                    </button>

                  </div>

                ))}

              </div>


              {/* ================= CART TOTAL ================= */}

              <div className="cart-summary">

                <div>

                  <p>
                    Total Items:
                    <strong> {totalItems}</strong>
                  </p>

                  <h2>
                    Total:
                    <span>
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                  </h2>

                </div>

                <button className="checkout-button">
                  Proceed to Checkout
                </button>

              </div>

            </>

          )}

        </section>

  );
}

export default Cart;


