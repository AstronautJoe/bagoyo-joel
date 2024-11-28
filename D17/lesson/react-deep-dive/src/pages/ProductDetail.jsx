import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Access the dynamic route parameter
  return <h2>Product ID: {id}</h2>;
};

export default ProductDetail;
