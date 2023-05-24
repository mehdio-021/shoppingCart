import React from "react";
import format from "../util";
import Fade from "react-reveal/Fade";

function Products(props) {
  /* console.log(props) */
  return (
    <div>
      <Fade bottom cascade>
        <ul className="products">
          {props.item.map((item) => (
            <li key={item.id}>
              <div className="product">
                <img src={item.image} alt="" />
                <p>{item.title}</p>
                <div className="product-price">
                  <button onClick={() => props.addProducts(item)}>
                    افزودن به سبد خرید
                  </button>
                  <div className="price">{format(item.price)}</div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Fade>
    </div>
  );
}

export default Products;
