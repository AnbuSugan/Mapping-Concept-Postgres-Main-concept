import React from "react";
import { useParams } from "react-router-dom";
import { ProductList } from "../data/ProductList";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/reducer/cart";

const Product = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const props = ProductList.find(
    (element) => element.id === parseInt(params.id)
  );
  const addToCart = () => {
    dispatch(addItem(props));
  };
  return (
    <div className="card" style={{ marginTop: "8%" }}>
      <div style={{ marginTop: "3%" }}>
        <img
          src={props.thumbnail}
          height={350}
          width={400}
          alt={props.title}
          className="images"
        />
      </div>
      <div className="card-body mt-3">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="mt-2">Price: {`₹${props.price}`}</h6>
        <h6 className="mt-2">Discount:{props.discountPercentage}%</h6>
        <h6 className="mt-2">Rating:{props.rating}</h6>
        <div className="mt-4">
          {props.stock > 0 ? (
            <>
              <button className="btn btn-success">Buy Now</button>
              <button className="btn btn-success  ms-3" onClick={addToCart}>
                Add to cart
              </button>
            </>
          ) : (
            <button className="btn btn-outline-danger">out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
