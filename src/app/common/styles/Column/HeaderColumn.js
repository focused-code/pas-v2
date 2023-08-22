import styled from "styled-components";

export const HeaderColumn = styled.section`
  display: flex;
  flex:1;
  width: 100%;
  justify-content: ${props => props.justify || 'flex-start'};
  align-items: ${props => props.align || 'flex-start'};
`;