import { useState } from 'react';

const Craecte = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [auther, setAuther] = useState('azazy');

  return (
    <div className='create'>
      <form>
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
          <option value='samir'>azazy</option>
        </select>
      </form>
      <div>{title}</div>
      <div>{body}</div>
      <div> {auther}</div>
    </div>
  );
};

export default Craecte;
