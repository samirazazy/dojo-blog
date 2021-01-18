import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // Crete  fack server
  // npx json-server --watch data/db.json --port 8000
  const [Blogs, setBlogs] = useState(null);
  const [Loading, setLoading] = useState(true);
  const [Error, setError] = useState(null);

  const handelDelete = (id) => {
    const newBolgs = Blogs.filter((blog) => blog.id !== id);
    setBlogs(newBolgs);
  };

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then((res) => {
          if (!res.ok) {
            throw new Error('can not load data from server');
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          setLoading(false);
          setError(err.message);
        });
    }, 1000);
  }, []);

  return (
    <div className='home'>
      {Error && <p>{Error}</p>}
      {Loading && <p>Loading...</p>}
      {Blogs && (
        <BlogList
          Blogs={Blogs}
          title={'Blog List'}
          handelDelete={handelDelete}
        />
      )}
      {/* <BlogList
        Blogs={Blogs.filter((blog) => blog.author === 'mario')}
        title={"Mario's blog"}
        handelDelete={handelDelete}
      /> */}
    </div>
  );
};

export default Home;
