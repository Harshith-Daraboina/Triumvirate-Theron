
import { useState } from 'react';
function App() {
  return <LightBulb/>
}


function LightBulb() {
  const [bulbState , setBulbState] = useState(true); // This should be a state variable in a real app
  return (
    <div>
      <BulbState bulbState={bulbState}/>
      <ToggleBulbState setBulbState = {setBulbState}/>
    </div>
  )
}

function BulbState( { bulbState }) {

  return (
    <>
    { bulbState ? <img src="https://imgs.search.brave.com/vzcNrt-qtaGKnvlXBbbnoIJ0XS6DHQTd64UBDnIa2iI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/NDM3LzgxOS9zbWFs/bC9zdHVubmluZy10/cmFkaXRpb25hbC1n/bG93aW5nLWxpZ2h0/LWJ1bGItZnJvbnQt/dmlldy10cmFuc3Bh/cmVudC1iYWNrZ3Jv/dW5kLXByZW1pdW0t/cG5nLnBuZw
" alt="bulb On" style={{width : "150px", height : "150px"}} /> : <img src="https://imgs.search.brave.com/XziW8f6vh1ZqsGIRZkqA8Ra88YpdgGP9GQDlCB07EaM/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nbWFydC5jb20v/ZmlsZXMvNy9MaWdo/dC1CdWxiLVBORy1U/cmFuc3BhcmVudC1J/bWFnZS5wbmc
" alt="bulb Off" style={{ height : "135px" , marginLeft : "28px"}}/> }
    </>
  )
}

function ToggleBulbState( { setBulbState }) {
  return (
    <div className="">
      <button onClick={() => setBulbState(change_state => !change_state) }>Toggle the bulb state</button>
    </div>
  )
}


export default App
