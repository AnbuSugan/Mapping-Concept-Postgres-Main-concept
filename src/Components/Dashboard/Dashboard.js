import React from "react";
import "./Dashboard.css";
import { ProductList } from "../data/ProductList";
import ProductCard from "../ProductCart/ProductCart";

const Dashboard = () => {
  return (
    <div
      className="d-flex flex-wrap justify-content-center p-3"
      style={{ marginTop: "10%" }}
    >
      {ProductList.map((product) => (
        <ProductCard {...product} key={product.id} />
      ))}
    </div>
  );
};

export default Dashboard;
