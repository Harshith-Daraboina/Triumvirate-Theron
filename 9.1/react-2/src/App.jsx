import { useState, useEffect } from 'react';

function App() {

  return <OnButtonClick></OnButtonClick>

  function OnButtonClick() {
    const [count, setCount] = useState(0);
    console.log("unmounted")
    // This effect runs once when the component mounts
    // and sets up an interval to update the count every second.
    // The interval is cleared when the component unmounts.
    // Note: In a real application, you should clear the interval when the component unmounts.
    useEffect(function () {
      setInterval(() => {
        setCount(Count => Count + 1); 
      }, 1000);
      console.log("mounted")
    }, []);// when the array is empty, the effect runs only once after the initial render.


    useEffect(() => {
      console.log("unmounted")
    } , [count]); // This effect runs every time the count changes.


    


    return (
      <div className="">
        <h2>Clock: {count} secs</h2>
      </div>
    );
  }

}

export default App;
 