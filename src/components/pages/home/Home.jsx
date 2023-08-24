import React, { useEffect, useState } from "react";
import Banner from "../../../assets/banner.jpg";
import "./Home.css";
import Product from "../../product/Product";
import { useSelector } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  // console.log(products);
  const searchQuary = useSelector((state) => state.filter.searchQuary);
  const filterOption = useSelector((state) => state.filter.filterOption);
  // console.log(filterOption);
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


  // filter products logic
  const transformProducts = () => {
    let filterProducts = products;

    if (searchQuary) {
      filterProducts = filterProducts.filter((item) => {
        return item.title.toLowerCase().includes(searchQuary);
      });
    }

    switch (filterOption) {
      case "priceLowToHigh":
        return (filterProducts = filterProducts.sort((a, b) => {
          return a.price - b.price;
        }));
      case "priceHighToLow":
        return (filterProducts = filterProducts.sort((a, b) => {
          return b.price - a.price;
        }));
      case "lowRating":
        return (filterProducts = filterProducts.sort((a, b) => {
          return a.rating.rate - b.rating.rate;
        }));
      case "highRating":
        return (filterProducts = filterProducts.sort((a, b) => {
          return b.rating.rate - a.rating.rate;
        }));

      default:
        return filterProducts;
    }
  };

  return (
    <div className="home">
      <div className="home-container">
        <img className="banner" src={Banner} />
        <div className="products-listing">
          {transformProducts().map((item, index) => {
            return <Product props={item} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
