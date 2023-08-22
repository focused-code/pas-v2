import styled from "styled-components";

export const FirstBox = styled.section`
  display: flex;
  writing-mode: vertical-lr;
  text-orientation: sideways;
  background-color: #101242;
  color: #fff;
  padding: 0.25rem;
  height: 12.75vh;
  justify-content: center;
  align-items: center;
  & > p{
      padding: 0;
      margin: 0;
      text-transform: uppercase;
      transform: rotate(180deg);
  }
`;
