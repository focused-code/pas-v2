import styled from "styled-components";

export const SecondBox = styled.section`
  display: flex;
  padding: 0 0.6rem;
  color: ${props => (props.advisortask) ? 'rgba(244,204,204, 0.5)' : (props.isChecked) ? '#c4c8cc' : '#212529'};
`;
