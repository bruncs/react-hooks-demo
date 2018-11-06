import React, { useState, useEffect } from "react";
import ThemeContext from "../../themes";
import { Container } from "./styles";

const Counter = ({ theme }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log(theme);
  });

  return (
    <Container background={theme.theme.background}>
      <h3>Counter</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </Container>
  );
};

export default Counter;
