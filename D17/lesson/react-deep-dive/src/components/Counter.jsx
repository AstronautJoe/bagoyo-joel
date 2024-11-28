import { useState } from 'react';
import React from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment yo</button>
    </div>
  );
};

export default Counter;
