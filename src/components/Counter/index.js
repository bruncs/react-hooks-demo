import React, { useState, useEffect } from "react";
import { Container } from "./styles";

const Counter = ({ context }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const { background, color } = context.theme;
  const { title, messageStart, messageEnd, buttonCaption } = context.locale;

  return (
    <Container background={background} color={color}>
      <h3>{title}</h3>
      <p>
        {messageStart} {count} {messageEnd}
      </p>
      <button onClick={() => setCount(count + 1)}>{buttonCaption}</button>
    </Container>
  );
};

export default Counter;
