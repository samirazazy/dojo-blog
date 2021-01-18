import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // Crete  fack server
  // npx json-server --watch data/db.json --port 8000
  const [Blogs, setBlogs] = useState(null);
  const [Loading, setLoading] = useState(true);

  const handelDelete = (id) => {
    const newBolgs = Blogs.filter((blog) => blog.id !== id);
    setBlogs(newBolgs);
  };

  useEffect(() => {
    // fetch('http://localhost:8000/blogs').then((res) =>
    //   res.json().then((data) => setBlogs(data))
    // );
    getData();
  }, []);

  const getData = async () => {
    setTimeout(async () => {
      const res = await fetch('http://localhost:8000/blogs');
      const data = await res.json();
      setBlogs(data);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className='home'>
      {Loading ? (
        <p>Loading...</p>
      ) : (
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
