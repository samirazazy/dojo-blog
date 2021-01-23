import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import useFetch from './useFetch';

const BlogDetails = () => {
  const { id } = useParams();
  const API = 'http://localhost:8000/blogs/';
  const { Data: blog, Loading, Error } = useFetch(API + id);
  const history = useHistory();

  const handleClick = () => {
    fetch(API + id, { method: 'DELETE' }).then(() => history.push('/'));
  };

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
      <button onClick={handleClick}>Delete</button>
    </div>
  );
};

export default BlogDetails;
