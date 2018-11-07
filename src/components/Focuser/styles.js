import styled from "styled-components";

export const Section = styled.section`
  background: ${props => props.background};
  color: ${props => props.color};
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  margin: 0px;
`;

export const Input = styled.input`
  margin: 10px 0;
`;

export const Button = styled.button`
  background: ${props => props.background};
  color: ${props => props.color};
  margin: 10px 0 0 0;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
