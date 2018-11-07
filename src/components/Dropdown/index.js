import React from "react";
import { Section, Label, Control } from "./styles";

const Dropdown = ({ context, label, options }) => {
  const { foreground, primaryColor } = context.theme;

  return (
    <Section background={foreground} color={primaryColor}>
      <Label>{label}</Label>
      <Control background={primaryColor} color={foreground}>
        {Object.keys(options).map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Control>
    </Section>
  );
};

export default Dropdown;
