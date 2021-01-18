import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {
  const [Blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    {
      title: 'Web dev top tips',
      body: 'lorem ipsum...',
      author: 'mario',
      id: 3,
    },
  ]);

  const handelDelete = (id) => {
    const newBolgs = Blogs.filter((blog) => blog.id !== id);
    setBlogs(newBolgs);
  };

  return (
    <div className='home'>
      <BlogList Blogs={Blogs} title={'Blog List'} handelDelete={handelDelete} />
      <BlogList
        Blogs={Blogs.filter((blog) => blog.author === 'mario')}
        title={"Mario's blog"}
        handelDelete={handelDelete}
      />
    </div>
  );
};

export default Home;
