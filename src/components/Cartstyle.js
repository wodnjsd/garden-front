import React from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { getLoggedInUserId } from "../lib/auth";
import PlantConfetti from "./Confetti"

function Cart() {
  const [cart, setCart] = React.useState(null);
  const { plantName } = useParams()
  const [checkOut, setCheckOut] = React.useState(false)

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

  async function handleDelete() {
    try {
      await axios.delete(`/api/cart/${plantName}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      console.log(plantName)
      const { data } = await axios.get(`/api/cart`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      });
      setCart(data.cart)
    } catch (e) {
      console.log(e)
    }
  }

  function handleCheckout() {
    setCheckOut(true)
  }

  console.log(cart);

  return <section className="section">
    {checkOut ? <PlantConfetti /> : ""}

    <h2 className="title is-2 has-text-centered">Your basket</h2>
    <div className="container">
      {cart ? (
        cart.map((item, index) => {
          return (
            <div
              key={index}
            >
              <div className="card">
                <div className="card-content">
                  <div className="columns is-mobile">
                    <div className="column is-one-quarter">
                      <div className="card-image">
                        <figure className="image is-square">
                          <img src={item.image} alt={item.name} />
                        </figure>
                      </div>
                    </div>
                    <div className="column is-three-fifths">
                      <p className="title is-4">{item.name}</p>
                    </div>
                    <div className="column">
                      <p className="subtitle is-6">
                        {"Price: £" + item.price}
                      </p>
                    </div>
                  </div>
                </div>
                {getLoggedInUserId() && <button className="button is-danger is-outlined"
                  onClick={handleDelete}>🗑</button>}
              </div>
            </div>
          );
        })
      ) : (
        <p> Your bag appears to be empty </p>
      )}
    </div>
    <hr />
    <div className="block">
      <div className="columns is-mobile">
        <div className="column is-10 has-text-weight-bold is-size-4">
          Total:
        </div>

        <div className="column is-size-5">
          £ {cart ? (
            cart.reduce(function (acc, item) {
              return acc + item.price
            }, 0)) : (
            <p>Loading...</p>)
          }
        </div>
      </div>
    </div>
    <hr />
    <section className="has-text-right">
      <button className="button is-success is-light"
        onClick={handleCheckout} >
        Checkout 🔒
      </button>

    </section>
    <footer className="has-text-left">
      <Link className="has-text-success-dark"
        to="/plants">← Return to shopping</Link>
    </footer>
  </section>;
}

export default Cart;
