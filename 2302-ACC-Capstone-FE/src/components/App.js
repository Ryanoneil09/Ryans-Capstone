import React, { useEffect, useState } from "react";
import { fetchAllProducts } from "../api";
import "../style/index.css";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import { Routes, Route } from "react-router-dom";
const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      const result = await fetchAllProducts();
      setProducts(result);
    };
    getAllProducts();
  }, []);

  return (
    <div>
      <p>Hello World</p>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
};

export default App;
