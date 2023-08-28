import React from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  return (
    <div>
      <h1>Products</h1>
      {['film-1', 'film-2', 'film-3', 'film-4', 'film-5'].map(film => {
        return (
          <Link key={film} to={`${film}`}>
            {film}
          </Link>
        );
      })}
    </div>
  );
};

export default Products;
