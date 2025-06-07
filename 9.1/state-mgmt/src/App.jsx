import {useState , createContext ,useContext}  from 'react';

const CountContext = createContext();
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CountContext.Provider value={{ count, setCount }}>
        <Count />
      </CountContext.Provider>
    </div>
  );
}


function Count() {
  return (
    <div>
      <IncreaseCounter />
      <DecreaseCounter />
      <Counter />
    </div>
  )
}

function IncreaseCounter() {
  const { setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count => count + 1)}>Increase</button>
    </div>
  )
}
function DecreaseCounter() {
  const { setCount } = useContext(CountContext);
  return (
    <div>
      <button onClick={() => setCount(count => count - 1)}>Decrease</button>
    </div>
  )
}

function  Counter() {
  const { count } = useContext(CountContext);
  return (
    <div>
      <h1>Count: {count}</h1>
    </div>
  )
}

export default App;