import styled from "styled-components";

export const FourthBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > span{
    color: #000000;
  }
  & > span.first{
    font-size: 2rem;
    font-weight: 700;
    color: ${props => (props.advisortask) ? 'rgba(244,204,204, 0.5)' : (props.isChecked) ? '#c4c8cc' : '#212529'};

  }
  & > span.second{
    font-size: 0.75rem;  
    color: ${props => (props.advisortask) ? 'rgba(244,204,204, 0.5)' : (props.isChecked) ? '#c4c8cc' : '#212529'};
  }
  color: ${props => (props.advisortask) ? 'rgba(244,204,204, 0.5)' : (props.isChecked) ? '#c4c8cc' : '#212529'};
`;