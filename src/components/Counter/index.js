import React, { useState, useEffect } from "react";
import { Container } from "./styles";

const Counter = ({ context }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const { background, color } = context.theme;

  return (
    <Container background={background} color={color}>
      <h3>Counter</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Container>
  );
};

export default Counter;
