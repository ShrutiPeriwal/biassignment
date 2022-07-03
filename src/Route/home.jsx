import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Bmi from './Bmi';

const Home = () => {
  return (
    <>
      <nav className="flex flex-row justify-evenly p-3 mb-2 bg-cyan-200">
        <Link to="/">Home</Link>
        <Link to="bmi">BMi Calculater</Link>
        <Link to="showcase">ShowCase</Link>
        <Link to="shopping">Shopping</Link>
      </nav>
      <Outlet />
      {/* <Bmi /> */}
    </>
  );
};

export default Home;