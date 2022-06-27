import React from "react";
// import { Link } from "react-router-dom";
import axios from "axios";

function Cart() {
  const [cart, setCart] = React.useState(null);

  React.useEffect(() => {
    async function fetchCart() {
      try {
        const { data } = await axios.get(`/api/cart`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setCart(data.cart);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchCart();
  }, []);

  console.log(cart);
  // console.log(data)
  return ( <section className="section">
    <div className="container">
      {cart ? (
        cart.map((item, index) => {
          return (
            <div
              key={index}
              className="column is-one-third-desktop is-half-tablet is-half-mobile"
            >
              <div className="columns is-multiline is-mobile">
                <div className="column is-one-third-desktop is-half-tablet is-half-mobile">
                  <div className="card">
                    <div className="card-content">
                      <div className="media">
                        <div className="media-content">
                          <p className="title is-4">{cart.name}</p>
                        </div>
                      </div>
                    </div>
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <img src={cart.image} alt={cart.name} />
                      </figure>
                    </div>
                    <p className="subtitle is-6">
                      {"Price: £" + cart.price}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <p>... loading</p>
      )}
    </div>
  </section>
  )
}

export default Cart;
