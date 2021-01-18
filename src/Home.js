import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {
  // Crete  fack server
  // npx json-server --watch data/db.json --port 8000

  const { Data, Loading, Error } = useFetch('http://localhost:8000/blogs');

  return (
    <div className='home'>
      {Error && <p>{Error}</p>}
      {Loading && <p>Loading...</p>}
      {Data && <BlogList Blogs={Data} title={'Blog List'} />}
      {/* <BlogList
        Blogs={Blogs.filter((blog) => blog.author === 'mario')}
        title={"Mario's blog"}
        handelDelete={handelDelete}
      /> */}
    </div>
  );
};

export default Home;
