import React, { useState } from 'react';
import './style.css';

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>Count: {count}</h1>
      <Add set={setCount} />
    </>
  );
}

function Add({ set }) {
  return <button onClick={() => set((prev) => prev + 1)}>Add</button>;
}
