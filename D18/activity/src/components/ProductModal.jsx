import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductModal = ({ show, onClose, productId }) => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (productId) {
      const fetchProductDetails = async () => {
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
      };
      fetchProductDetails();
    }
  }, [productId]); // Re-fetch the product details when the productId changes

  return product ? (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>{product.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={product.image}
            alt={product.title}
            style={{ height: '25vh', objectFit: 'contain' }}
          />
        </div>

        <p>{product.description}</p>
        <p>
          <strong>Price:</strong> ${product.price}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  ) : (
    <p>Loading...</p>
  );
};

export default ProductModal;
