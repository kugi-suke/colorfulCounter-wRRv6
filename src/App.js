import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

type Props = {
  initialCount: number,
  initialText: string,
};

function App({ initialCount, initialText }: Props) {
  const [count, setCount] = useState(initialCount);
  const [definedCount, setDefCount] = useState(initialCount);
  const [text, setText] = useState(initialText);

  useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos/' + count)
        .then(res => {
            setText(res.data.title)
        })
        .catch(() => {
            setText(initialText)
            console.log('ERROR! jsonplaceholder has 1~200 data...')
        })
    });

  return (
    <div className="App" data-test="component-app">
      <div className="App-counter">
        <p>Red Counter</p>
        <p>Count: {count}</p>
        <div>
          <button onClick={() => setCount(count + 1)}>+1</button>
          <button onClick={() => setCount(count - 1)}>-1</button>
          <button onClick={() => setCount(initialCount)}>clear</button>
        </div>
        <div className="Submit-form">
          <input type="text" value={definedCount} onChange={d => setDefCount(d.target.value)}></input>
          <button className="submitButton" type="submit" onClick={() => setCount(+definedCount)}>Set Count</button>
        </div>
      </div>
      <div className="Todos">
          <p>from jsonplaceholeder/todos</p>
          <p>{text}</p>
      </div>
    </div>
  );
};
// https://stackoverflow.com/questions/37902849/import-and-export-may-only-appear-at-the-top-level

App.defaultProps = {
  initialCount: 0,
  initialText: "",
};

export default App;