import React from "react";
import format from "../util";
import Fade from "react-reveal/Fade";

function Cart(props) {
  const { cartItems, removeProducts } = props;

  const itemprice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  const totalPrice = itemprice;
  return (
    <>
      {cartItems.length === 0 ? (
        <div className="empty-price">سبد خرید خالی است.</div>
      ) : (
        <div className="show-price">
          شما {cartItems.length} نوع محصول در سبد خرید دارین
        </div>
      )}
      <div className="cart-item">
        {cartItems.map((item) => (
          <Fade left>
            <div className="product-item" key={item.id}>
              <div className="product-detail">
                <img src={item.image} alt="" />
                <h2> {item.title}</h2>
              </div>
              <div className="product-price">
                <div className="price">
                  <span>{format(item.price)}</span>
                  <span className="qty">{item.qty} </span>
                </div>
                <div className="remove-item">
                  <button onClick={() => removeProducts(item)}>
                    {" "}
                    حذف از سبد خرید
                  </button>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>
      <div className="total-price">
        <div className="total-text"> قیمت نهایی: </div>
        <div className="total">{format(totalPrice)} </div>
      </div>
    </>
  );
}

export default Cart;
