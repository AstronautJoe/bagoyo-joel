import React, { useState } from 'react';
// https://fakestoreapi.com/products

const Products = () => {
  const [products, setProducts] = useState([]);
  const handleSearch = async (event) => {
    // event.preventDefault();
    const response = await fetch(`https://fakestoreapi.com/products`);
    const data = await response.json();
    setProducts(data || []);
  };
  handleSearch();
  return (
    <div className="mt-5 px-5 py-10">
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-12 col-md-3 mb-3">
            <div className="card p-3">
              <img
                src={product.image}
                className="card-img-top"
                style={{ height: '200px', objectFit: 'contain' }}
                alt={product.title}
              />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <h6>${product.price}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
