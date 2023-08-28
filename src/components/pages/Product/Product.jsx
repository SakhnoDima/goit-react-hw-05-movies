import React from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();
  return (
    <div>
      <h2>Product</h2>
      <h3>Now showing product with id - {productId}</h3>
      <ul>
        <li>
          <Link to="details">Title</Link>
        </li>
        <li>
          <Link to="actor">Actor</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default Product;
