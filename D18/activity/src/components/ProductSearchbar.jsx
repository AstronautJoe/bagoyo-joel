import { useState } from 'react';
import { Navbar, Form, Row, Col, Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const ProductSearchbar = () => {
  const { selectedCategory } = useParams(); // Get the selected category from params
  const [searchTerm, setSearchTerm] = useState(''); // State for search term
  const navigate = useNavigate(); // Used for navigating programmatically

  const handleSubmit = (event) => {
    event.preventDefault();

    // Navigate to the appropriate route based on the search term and selected category
    let newURL = '';

    if (!selectedCategory) {
      // If no category is selected, navigate to 'all' products
      newURL = `/products/category/all/search/${searchTerm}`;
    } else {
      // If category is selected, navigate to that category with the search term
      newURL = `/products/category/${selectedCategory}/search/${searchTerm}`;
    }

    navigate(newURL); // Navigate to the new URL
  };

  return (
    <Navbar className="bg-body-tertiary justify-content-center">
      <Form inline onSubmit={handleSubmit}>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search products by title"
              className="mr-sm-2"
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)} // Handle search term change
            />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
};

export default ProductSearchbar;
