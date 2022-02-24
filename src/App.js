import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease () {
    setCount(count - 1);
  }

  return (
    <div className='container'>
      <div className='count_container'>

        <p>{count}</p>

        <div className='buttons'>
          <button type='button' onClick={decrease}>Decrease</button>
          <button type='button' onClick={increase}>Increase</button>
        </div>
      </div>
    </div>
  );
}

export default App;
