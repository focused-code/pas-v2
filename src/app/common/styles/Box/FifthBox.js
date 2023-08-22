import styled from "styled-components";

export const FifthBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0.6rem;
  & > span{
      color: ${props => (props.advisortask) ? 'rgba(244,204,204, 0.5)' : (props.isChecked) ? '#c4c8cc' : '#212529'};
  }
  color: ${props => (props.advisortask) ? 'rgba(244,204,204, 0.5)' : (props.isChecked) ? '#c4c8cc' : '#212529'};
`;