import { useState ,useEffect } from 'react'

import './App.css'

function App() {

  const [Post , setPosts] = useState({});

  useEffect(() => {
    getJson(); 
  } , [])
  return (
    <div className="App">
      <h1>
        {Post.id}-{Post.title}
      </h1>
      <h2>
        {Post.body}
      </h2>

    </div>
  )
  async function getJson() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    setPosts(data);
  }
}



export default App;
