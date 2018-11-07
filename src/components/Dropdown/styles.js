import styled from "styled-components";

export const Section = styled.section`
  background: ${props => props.background};
  color: ${props => props.color};
  margin: 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 6px 6px 6px rgba(0, 0, 0, 0.2);
  display: inline-block;
`;

export const Label = styled.h1`
  margin: 0 0 10px 0;
`;

export const Control = styled.select`
  background: ${props => props.background};
  color: ${props => props.color};
  -webkit-appearance: button;
  -webkit-border-radius: 2px;
  -webkit-padding-end: 20px;
  -webkit-padding-start: 2px;
  background-image: url(http://i62.tinypic.com/15xvbd5.png);
  background-position: 93% center;
  background-repeat: no-repeat;
  border: none;
  border-radius: 5px;
  margin: 20px 0;
  overflow: hidden;
  padding: 5px 10px;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 150px;
`;
