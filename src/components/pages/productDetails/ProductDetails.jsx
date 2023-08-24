import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useEffect, useState } from "react";
import { cartAction } from "../../../redux-store/cart-slice";
import { useDispatch, useSelector } from "react-redux";
import Product from "../../product/Product";

function ProductDetails() {
  const [product, setProdutc] = useState({});

  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { id } = useParams();

  const fetchSingleProduct = (suggetionProducts) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProdutc(data);
      })
      .catch((err) => {
        alert("Something went wrong..." + err);
      });
  };

  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return (
    <>
      <main className="product-details-container">
        <section className="image">
          <img className="img" src={product.image} alt="" />
          <div className="button-group">
            <div>
              {cart.includes(product) ? (
                <button
                  onClick={() => {
                    dispatch(cartAction.removeFromCart(product));
                  }}
                  className=""
                >
                  Remove From Cart
                </button>
              ) : (
                <button
                  onClick={() => {
                    dispatch(cartAction.addToCart(product));
                  }}
                >
                  Add to Cart
                </button>
              )}
            </div>
            <button
              onClick={() => {
                dispatch(cartAction.addToCart(product));
                navigate("/payment");
              }}
            >
              Buy Now
            </button>
          </div>
        </section>
        <section className="details">
          <p className="title">{product.title}</p>
          <span className="rating">
            <span>{product.rating && product.rating.rate} </span>(
            {product.rating && product.rating.count}) Ratings{" "}
          </span>
          <span className="price">₹{product.price}</span>
          <div className="product-decriptions">{product.description}</div>
          <div className="delivery">
            <h3>Delivery Address</h3>
            <div className="address-details">
              <span>
                Sukanta pally, Suroj' Shop, <br />
                Saraitikar, Burdwan, <br />
                West Bengal - 713104
              </span>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ProductDetails;
