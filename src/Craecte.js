import { useState } from 'react';

const Craecte = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [auther, setAuther] = useState('azazy');
  const [loading, setLoading] = useState(false);

  const handelSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, auther };
    setLoading(true);
    fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      setLoading(false);
    });
  };
  return (
    <div className='create'>
      <form onSubmit={handelSubmit}>
        <label>Blog Name:</label>
        <input
          type='text'
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body:</label>
        <textarea
          type='text'
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <label>Blog Auther:</label>
        <select value={auther} onChange={(e) => setAuther(e.target.value)}>
          <option value='samir'>samir</option>
          <option value='azazy'>azazy</option>
        </select>
        {loading ? (
          <button type='submit' disabled>
            Add blog...
          </button>
        ) : (
          <button type='submit'>Add blog</button>
        )}
      </form>
    </div>
  );
};

export default Craecte;
