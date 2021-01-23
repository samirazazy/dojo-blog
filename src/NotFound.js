import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className='not-found'>
      <p>This page is not found.</p>
      <Link to='/'>
        <h4>Back to Home Page</h4>
      </Link>
    </div>
  );
}
