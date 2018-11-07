import React, { useRef } from "react";
import { Section, Title, Input, Button } from "./styles";

const Focuser = ({ context }) => {
  const { foreground, primaryColor } = context.theme;
  const { title } = context.locale;

  const input = useRef(null);

  const handleBlur = () => input.current.blur();
  const handleFocus = () => input.current.focus();

  return (
    <Section background={foreground} color={primaryColor}>
      <Title>{title}</Title>
      <Button
        background={primaryColor}
        color={foreground}
        onClick={handleFocus}
      >
        Focus
      </Button>
      <Button background={primaryColor} color={foreground} onClick={handleBlur}>
        Blur
      </Button>
      <Input ref={input} type="text" />
    </Section>
  );
};

export default Focuser;
