import styled from "styled-components";

export const TopRow = styled.section`
  display: flex;
  font-family: 'Open Sans', sans-serif;
  justify-content: space-evenly;
  width: 100%;
  color: #fff;
  background-color: ${props => (props.advisortask) ? 'rgba(244,204,204, 0.5)' : (props.isChecked) ? '#dee2e6' : '#101242'};
  padding: 0.25rem;
  text-transform: uppercase;
  font-weight: 600;
`;