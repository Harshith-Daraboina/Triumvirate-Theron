import './App.css';
import React from 'react';


function App() {
  const [count , setCount] = React.useState(0);
  function OnButtonClick() {
    setCount(count + 1);
  }
  return (
    <button onClick={OnButtonClick}>  Click me {count}</button>
  );
} 

export default App;
