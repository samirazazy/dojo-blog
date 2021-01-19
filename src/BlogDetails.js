import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const { Data: blog, Loading, Error } = useFetch(
    'http://localhost:8000/blogs/' + id
  );

  return (
    <div className='blog-details'>
      {Loading && <p>Loading...</p>}
      {Error && <p>{Error}</p>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by: {blog.author}</p>
          <div>{blog.body}</div>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
