import { useState ,useEffect } from 'react'

import './App.css'

function App() {
  const [loading  , setLoading] = useState(false);
  const [Post , setPosts] = useState({});


  async function getJson() {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/' + Math.floor(Math.random() * 100 + 1));
    const data = await response.json();
    setPosts(data);
    setLoading(false);
  }
  useEffect(() => {
    getJson(); 
  } , [])
  return (
    <div className="App">
      {loading ? <h1>Loading...</h1> : 
      <div className="">

      <h1>
        {Post.id}-{Post.title}
      </h1>
      <h2>
        {Post.body}
      </h2>  
      </div>
      }
      

    </div>
  )

}



export default App;
