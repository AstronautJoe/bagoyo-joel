import React, { useState, useEffect } from 'react';
import ProductModal from './ProductModal';
import ProductCard from './ProductCard';
import { useParams } from 'react-router-dom';

const Products = () => {
  const { selectedCategory, searchTerm } = useParams();
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState(null);

  // Do not set state directly inside the render cycle like this:
  // if (searchTerm) {
  //   setProducts
  // }

  // Fetch products based on selected category
  useEffect(() => {
    // TODO: consider adding a try catch to catch API server errors
    let APIURL = 'https://fakestoreapi.com/products';
    const fetchProducts = async () => {
      if (selectedCategory && selectedCategory !== 'all') {
        APIURL = `https://fakestoreapi.com/products/category/${selectedCategory}`;
      }
      const response = await fetch(APIURL);
      const data = await response.json();
      setProducts(data || []);
    };
    fetchProducts();
    console.log('fetch products use effect ran');
  }, [selectedCategory]); // Runs whenever selectedCategory changes

  // Filter products by search term when products or searchTerm changes
  useEffect(() => {
    if (searchTerm) {
      const searchRegex = new RegExp(searchTerm, 'i');
      const filtered = products.filter((product) =>
        searchRegex.test(product.title)
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); // If no search term, show all products
    }
  }, [products, searchTerm]); // Runs whenever products or searchTerm changes

  const handleClick = (productId) => {
    setSelectedProductId(productId);
    toggleModal();
  };

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  const displayProducts =
    filteredProducts.length > 0 ? filteredProducts : products;

  return (
    <>
      <h2>Products Component</h2>
      <div className="row">
        {displayProducts.map((product) => (
          <ProductCard
            key={product.id}
            productId={product.id}
            productImage={product.image}
            productTitle={product.title}
            productPrice={product.price}
            handleClick={handleClick}
          />
        ))}
      </div>
      {selectedProductId ? (
        <ProductModal
          show={showModal}
          onClose={toggleModal}
          productId={selectedProductId}
        />
      ) : null}
    </>
  );
};

export default Products;


