import Dropdown from 'react-bootstrap/Dropdown';
import { useParams } from 'react-router-dom';

const CategoryDropdown = ({ categories }) => {
  const { selectedCategory } = useParams();

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary">
        {selectedCategory || 'Filter by Category'}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {/* Using '??' to check first if categories is falsy if it is, provide an empty array,
        then check if array is empty use the empty state placeholder */}
        {(categories ?? []).length === 0 ? (
          <Dropdown.Item>No Categories found</Dropdown.Item>
        ) : (
          categories.map((category, categoryIndex) => (
            <Dropdown.Item
              href={`/products/category/${category}`}
              key={categoryIndex}
            >
              {category}
            </Dropdown.Item>
          ))
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CategoryDropdown;
