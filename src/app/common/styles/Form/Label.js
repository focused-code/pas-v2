import styled from "styled-components";

export const Label = styled.label`
  font-family: 'Open Sans', sans-serif;
  width: ${props => props.width || '100%'};
  padding: 0.425rem;
  padding-left: 0;
  padding-bottom: 0;
  background-color: ${props => props.background || 'inherit'};
  font-size: ${props => props.fontsize || '0.72rem'};
  text-align: ${props => props.align || 'left'};
  text-transform: ${props => props.transform || 'none'};
  margin: 0;
  font-weight: 600;
`;