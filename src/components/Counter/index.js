import React, { useState, useEffect } from "react";
import ThemeContext from "../../themes";

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <section>
      <h3>Counter</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </section>
  );
};

export default Counter;
