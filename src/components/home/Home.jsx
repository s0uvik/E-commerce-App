import React, { useContext, useEffect, useState } from "react";
import Banner from "../../assets/banner.jpg";
import "./Home.scss";
import Product from "../product/Product";
import { globalContext } from "../Store/Context";

const Home = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    } catch {
      (err) => {
        alert(err.message);
      };
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  useEffect(() => {
    filterDispatch({
      type: "SET_PRODUCTS",
      payload: products,
    });
  }, [products]);

  const {
    filterDispatch,
    filterState: { filterProducts },
  } = useContext(globalContext);
console.log(products)
  return (
    <div className="home">
      <div className="home_container">
        <img className="home_image" src={Banner} />

        <div className="home_row">
          {filterProducts.map((item, index) => {
            return <Product props={item} key={index} />;
          })}
        </div>
        <div className="home_row"></div>
        <div className="home_row"></div>
      </div>
    </div>
  );
};

export default Home;
