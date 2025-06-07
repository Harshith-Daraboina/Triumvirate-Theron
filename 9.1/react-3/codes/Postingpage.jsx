import { useState } from 'react';
import { PostComponent } from './Post';

const styles = {
  appContainer: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f5f7fa',
    minHeight: '100vh'
  },
  button: {
    padding: '0.75rem 1.5rem',
    backgroundColor: '#007bff',
    color: 'white',
    fontWeight: 'bold',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    marginBottom: '1rem'
  },
  modalOverlay: {
    position: 'fixed',
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '12px',
    width: '90%',
    maxWidth: '400px',
    display: 'grid',
    gap: '1rem'
  },
  input: {
    padding: '0.75rem',
    borderRadius: '6px',
    border: '1px solid #ccc'
  },
  postsContainer: {
    display: 'grid',
    gap: '1.5rem'
  },
  closeButton: {
    backgroundColor: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer'
  }
};

function App() {
  const [posts, setPosts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: '', subtitle: '', description: '', time: '', image: ''
  });

  function handlePost() {
    if (!form.name || !form.description) return;

    setPosts([...posts, form]);
    setForm({ name: '', subtitle: '', description: '', time: '', image: '' });
    setShowModal(false);
  }

  return (
    <div style={styles.appContainer}>
      <button style={styles.button} onClick={() => setShowModal(true)}>Add Post</button>

      {showModal && (
        <div style={styles.modalOverlay}>
          <div style={styles.modalContent}>
            <input
              style={styles.input}
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
            />
            <input
              style={styles.input}
              type="text"
              placeholder="Enter your Subtitle"
              value={form.subtitle}
              onChange={e => setForm({ ...form, subtitle: e.target.value })}
            />
            <input
              style={styles.input}
              type="text"
              placeholder="Enter your Description"
              value={form.description}
              onChange={e => setForm({ ...form, description: e.target.value })}
            />
            <input
              style={styles.input}
              type="text"
              placeholder="Enter your Time"
              value={form.time}
              onChange={e => setForm({ ...form, time: e.target.value })}
            />
            <input
              style={styles.input}
              type="text"
              placeholder="Enter your Img URL"
              value={form.image}
              onChange={e => setForm({ ...form, image: e.target.value })}
            />
            <button style={styles.button} onClick={handlePost}>Submit</button>
            <button style={styles.closeButton} onClick={() => setShowModal(false)}>Cancel</button>
          </div>
        </div>
      )}

      <div style={styles.postsContainer}>
        {posts.map((post, index) => (
          <PostComponent key={index} {...post} />
        ))}
      </div>
    </div>
  );
}

export default App;
