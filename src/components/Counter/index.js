import React, { useState, useEffect } from "react";
import { Section, Title, Message, Button } from "./styles";

const Counter = ({ context }) => {
  const [count, setCount] = useState(0);
  const { foreground, primaryColor } = context.theme;
  const { title, messageStart, messageEnd, buttonCaption } = context.locale;

  useEffect(() => {
    document.title = `${messageStart} ${count} ${messageEnd}`;
  });

  return (
    <Section background={foreground} color={primaryColor}>
      <Title>{title}</Title>
      <Message>
        {messageStart} {count} {messageEnd}
      </Message>
      <Button
        background={primaryColor}
        color={foreground}
        onClick={() => setCount(count + 1)}
      >
        {buttonCaption}
      </Button>
    </Section>
  );
};

export default Counter;
