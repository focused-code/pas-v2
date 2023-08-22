import styled from "styled-components";

export const StepBox = styled.section`
  display: flex;
  padding: 0.25rem;
  align-items: center;
  color: ${props => (props.advisortask) ? 'rgba(244,204,204, 0.5)' : (props.isChecked) ? '#c4c8cc' : '#212529'};
`;