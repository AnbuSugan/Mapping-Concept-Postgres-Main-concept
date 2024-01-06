import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";

export default function ProductCard(props) {
  const navigate = useNavigate();
  return (
    <div
      className="card m-2 cursor-pointer"
      style={{ width: 250 }}
      role="button"
      onClick={() => navigate(`/Product/${props.id}`)}
    >
      <div className="mt-2">
        <img
          src={props.thumbnail}
          height={150}
          width={180}
          alt={props.title}
          className="images"
        />
      </div>
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <h6 className="mt-2">Price: {`₹${props.price}`}</h6>
        <h6 className="mt-2">Discount:{props.discountPercentage}%</h6>
        <h6 className="mt-2">Rating:{props.rating}</h6>
        <div className="mt-4">
          {props.stock > 0 ? (
            <button className="btn btn-success">Available</button>
          ) : (
            <button className="btn btn-outline-danger">out of stock</button>
          )}
        </div>
      </div>
    </div>
  );
}
