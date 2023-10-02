import React, { useEffect, useState } from "react";
import { fetchSingleProduct } from "../api";
import { useParams, useNavigate } from "react-router-dom";
const ProductDetail = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const getSingleProduct = async () => {
      const result = await fetchSingleProduct(productId);
      setSingleProduct(result);
    };
    getSingleProduct();
  }, []);

  console.log("single product", singleProduct);
  return (
    <div>
      <img src={singleProduct?.image} alt="single product" />
      <h1>{singleProduct?.title}</h1>
      <p>{singleProduct?.description}</p>
      <p>{singleProduct?.price}</p>
      <button onClick={handleClick}>Back to Products</button>
    </div>
  );
};

export default ProductDetail;
