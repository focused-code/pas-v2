import styled from "styled-components";

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  width: ${props => props.width || '100%'};
  padding: 0.425rem;
  border: 1px dotted #868686;
  background-color: #fefefe;
  border-radius: 2px;
  :focus-visible{
    border: 1px solid #868686;
    outline: none;
  }
  ::-webkit-input-placeholder {
    font-size: 0.75rem;
  }
  :-ms-input-placeholder {
     font-size: 0.75rem;
  }
`;