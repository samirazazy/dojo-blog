const BlogList = ({ Blogs, title }) => {
  return (
    <div className='blog-lsit'>
      {Blogs.map((blog) => (
        <div className='blog-preview' key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
