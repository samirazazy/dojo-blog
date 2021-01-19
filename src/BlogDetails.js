import React from 'react';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div>
      <h4>detals - {id}</h4>
    </div>
  );
};

export default BlogDetails;
