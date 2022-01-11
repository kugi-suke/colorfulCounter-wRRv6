import React, { useState } from 'react';
import './App.css';

type Props = {
  initialCount: number,
};

function App3({ initialCount }: Props) {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="App3" data-test="component-app3">
      <div className="App3-counter">
        <p>Yellow Counter</p>
        <p>Count: {count}</p>
        <div>
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>-1</button>
          <button onClick={() => setCount(initialCount)}>clear</button>
        </div>
      </div>
    </div>
  );
};
// https://stackoverflow.com/questions/37902849/import-and-export-may-only-appear-at-the-top-level

App3.defaultProps = {
  initialCount: 0,
};

export default App3;