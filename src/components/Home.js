import React, { useState } from "react";
import Cart from "./Cart";
import Filter from "./Filter";
import Products from "./Products";
import data from "../data.json";

function Home() {
  const [item, setItem] = useState(data.products);
  const [sort, setSort] = useState("newest");
  const [brand, setBrand] = useState("");
  const [cartItems, setCartItems] = useState([]);

  const sortProducts = (event) => {
    setSort(event.target.value);
    if (sort === "newest") {
      setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "oldest") {
      setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  const filterProducts = (event) => {
    if (event.target.value === "") {
      setBrand(event.target.value);
      setItem(data.products);
    } else {
      setBrand(event.target.value);
      setItem(
        data.products.filter(
          (product) => product.availableBrand.indexOf(event.target.value) >= 0
        )
      );
    }
  };

  /*  console.log(cartItems); */
  const addProducts = (item) => {
    const exist = cartItems.find((element) => element.id === item.id);
    if (exist) {
      setCartItems(
        cartItems.map((element) =>
          element.id === item.id ? { ...exist, qty: exist.qty + 1 } : element
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const removeProducts = (item) => {
    const exist = cartItems.find((element) => element.id === item.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((element) => element.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((element) =>
          element.id === item.id ? { ...exist, qty: exist.qty - 1 } : element
        )
      );
    }
  };

  return (
    <div className="container">
      <header>
        <a href="">فروشگاه </a>
      </header>
      <main>
        <div className="content">
          <div className="main">
            <Filter
              count={item.length}
              sortProducts={sortProducts}
              brand={brand}
              filterProducts={filterProducts}
            />
            <Products item={item} addProducts={addProducts} />
          </div>
          <div className="sidebar ">
            <Cart cartItems={cartItems} removeProducts={removeProducts} />
          </div>
        </div>
      </main>
      <footer>نمونه کار ساده فروشگاه ری اکت</footer>
    </div>
  );
}

export default Home;
