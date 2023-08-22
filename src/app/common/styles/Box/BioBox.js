import styled from "styled-components";

export const BioBox = styled.section`
  display: flex;
  width: 70%;
  flex-direction: column;
  > p{
      margin: 0;
  }
  > section{
      padding-top: 0.5rem;
      display: flex;
  }
  > section.notes{
      font-style: italic;
  }
   > section.attention{
      padding-top: 0.5rem;
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      color: red;
  }
  > section span{
      margin-right: 0.7rem;
  }
  > section label{
      display: inline-block;
      font-weight: 600;
      margin:0;
      margin-right: 0.5rem;
  }
  &.blur{
      color: transparent;
      text-shadow: 0 0 5px rgba(0,0,0,0.5);
    }
`;