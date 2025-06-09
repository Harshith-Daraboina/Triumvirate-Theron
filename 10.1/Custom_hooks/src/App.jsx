import React, { useRef, useState } from 'react';

function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const [inputValue, setInputValue] = useState('');
  
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  
  return (
    <>
      <h1>Focus the input: {inputValue}</h1>
      <input 
        ref={inputEl} 
        type="text" 
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}

function App() {
  return (
    <>
      <TextInputWithFocusButton />
      {/* You can add other content here */}
    </>
    
  );
}

export default App;