import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ProductModal = ({ show, onClose, productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  

  // Notes: Why use useEffect?
  // It runs after every render, not blocking the UI from rendering
  // It is specially built for handling side effects like data fetching
  // It can rerun depending on a dependency array, if anything has changed
  useEffect(() => {
    // TODO: consider adding a try catch to catch API server errors
    if (productId) {
      const fetchProductDetails = async () => {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products/${productId}`
        );
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      };
      fetchProductDetails();
    }
  }, [productId]);

  if (loading) {
    return <p>Loading...</p>;
  }

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
