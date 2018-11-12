import React, { useReducer } from "react";
import { Section, Title, Message, Button } from "./styles";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: 0 };
  }
};

const CounterUpDown = ({ context }) => {
  const { foreground, primaryColor } = context.theme;
  const { title } = context.locale;

  const initialState = { count: 0 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Section background={foreground} color={primaryColor}>
      <Title>{title}</Title>
      <Message>{state.count}</Message>

      <Button
        background={primaryColor}
        color={foreground}
        onClick={() => dispatch({ type: "increment" })}
      >
        +
      </Button>
      <Button
        background={primaryColor}
        color={foreground}
        onClick={() => dispatch({ type: "decrement" })}
      >
        -
      </Button>
      <Button
        background={primaryColor}
        color={foreground}
        onClick={() => dispatch({ type: "reset" })}
      >
        Reset
      </Button>
    </Section>
  );
};

export default CounterUpDown;
