import React, { useState, useEffect } from 'react';
import ProductModal from './ProductModal';
import CategoryDropdown from './CategoryDropDown';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Fetch products when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data || []);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    const fetchProductsByCategory = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      fetchProductsByCategory(data);
    };
    fetchProductsByCategory();
  }, []);

  const handleClick = (productId) => {
    setSelectedProductId(productId);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className="mt-5 px-5 py-10">
      <CategoryDropdown categories={categories} />
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
                <p
                  onClick={() => handleClick(product.id)} // Pass product ID here
                  style={{ cursor: 'pointer' }}
                >
                  View Details
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Pass selectedProductId to ProductModal */}
      {selectedProductId && (
        <ProductModal
          show={showModal}
          onClose={toggleModal}
          productId={selectedProductId}
        />
      )}
    </div>
  );
};

export default Products;
