import styled from "styled-components";

export const RowContainer = styled.section.attrs((props) => ({
  className: "animate__animated animate__fadeInUp",
}))`
  // display: flex;
  font-family: "Open Sans", sans-serif;
  background-color: #fff;
  width: 90%;
  margin-bottom: 2rem;
  &.border-shadow{
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  }
`;
