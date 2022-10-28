import React, {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(prev => prev + 1 )}>+ 1</button>
      <button onClick={() => setCounter(prev => prev - 1 )}>- 1</button>
    </div>
  );
}

export default App;
