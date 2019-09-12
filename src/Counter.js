import React, { useState } from 'react';
import './App.css';

const Counter = () => {
  const [count, setCount] = useState(0);

    return (
    <div>
    <h2>Hooks</h2>
    <div className = 'circle'>
      <div className={count === 0 ? 'circle neutral' : count %10 === 0 ? 'circle pink' : count %2 === 0 ? 'circle even' : 'circle odd'} onClick={() => setCount(count + 1)}><h1>{count}</h1></div>
    </div>
    <div className = 'buttons'>
      <button onClick={() => setCount(0)}>Reset counter</button>
      <button onClick={() => setCount(count+1)}>Add one</button>
      <button onClick={count > 0 ? () => setCount(count-1) : () => setCount(0)}>Remove one</button>
    </div>
    </div>
  );
}



export default Counter;
