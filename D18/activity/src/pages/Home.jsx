import React, { useState, useEffect } from 'react';
import Products from '../components/Products';
import { Outlet } from 'react-router-dom';
import CategoryDropdown from '../components/CategoryDropDown';
import { useParams } from 'react-router-dom';
import ProductSearchbar from '../components/ProductSearchbar';

const Home = () => {
  const { anyParams } = useParams();
  console.log(anyParams);
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch(
        `https://fakestoreapi.com/products/categories`
      );
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
    console.log('fetch categories use effect ran');
  }, []);

  return (
    <div className="text-center mt-5">
      <ProductSearchbar />
      <CategoryDropdown categories={categories} />
      <div className="mt-5 px-5 py-10">
        {/* If it is the default home with a url of '/' show all products 
        otherwise show the outlet with dynamic routing  */}
        {anyParams ? <Outlet /> : <Products />}
      </div>
    </div>
  );
};

export default Home;
