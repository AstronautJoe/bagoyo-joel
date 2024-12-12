import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../contexts/AppContext';
import AppNavBar from './AppNavBar';

const Header = () => {
  const { isLoggedIn } = useAppContext();

  // console.log(isLoggedIn);
  return (
    <div className="bg-primary py-6">
      <AppNavBar />
    </div>
  );
};

export default Header;
