import { RecoilRoot, atom, useSetRecoilState, useRecoilValue } from 'recoil';
// import './App.css';

// Define the atom (global state)
const CountAtom = atom({
  key: 'countAtom',
  default: 0,
});

function App() {
  return (
    <RecoilRoot>
      <Count />
    </RecoilRoot>
  );
}

const Count = () => {
  return (
    <>
      <CurrentCount />
      <br />
      <IncreaseCounter />
      <DecreaseCounter />
    </>
  );
};

const CurrentCount = () => {
  const count = useRecoilValue(CountAtom); // Get the current value from Recoil
  return <h1>Current count: {count}</h1>;
};

const IncreaseCounter = () => {
  const setCount = useSetRecoilState(CountAtom); // Set new value
  return (
    <button onClick={() => setCount((c) => c + 1)}>
      Increase
    </button>
  );
};

const DecreaseCounter = () => {
  const setCount = useSetRecoilState(CountAtom); // Set new value
  return (
    <button onClick={() => setCount((c) => c - 1)}>
      Decrease
    </button>
  );
};

export default App;
