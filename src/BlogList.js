const BlogList = ({ Blogs, title, handelDelete }) => {
  return (
    <div className='blog-lsit'>
      <h1>{title}</h1>
      {Blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <button onClick={() => handelDelete(blog.id)}>Delete</button>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
