import styled from "styled-components";

export const ThirdBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0.6rem;
  width: 95%;
  color: ${props => (props.advisortask) ? 'rgba(244,204,204, 0.5)' : (props.isChecked) ? '#c4c8cc' : '#212529'};
`;