import { useState } from 'react';
import { usePrev } from './components/usePrev';

function App() {
  const [value  ,setvalue] = useState(0);
  const prevValue = usePrev(value);
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setvalue(value+1)}>Click me</button>
      <p>prevValue: {prevValue}</p>
    </>

  );
}

export default App;