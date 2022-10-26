import React, { useContext, useState } from "react";
import { Context } from "../contextProvider";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const totalCost = 5.99 * cartItems.length;
  const [message, setMessage] = useState("Place Order");

  const cartItemElements = cartItems.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  function placeOrder() {
    setMessage("Ordering...");
    setTimeout(() => {
      setMessage("Place Order");
      emptyCart();
    }, 2000);
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: ${totalCost}</p>
      {cartItems.length > 0 && (
        <div className="order-button">
          <button className="btn btn-order" onClick={placeOrder}>
            {message}
          </button>
        </div>
      )}
    </main>
  );
}
