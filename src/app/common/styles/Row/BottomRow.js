import styled from "styled-components";

export const BottomRow = styled.section`
  display: flex;
  font-family: "Open Sans", sans-serif;
  width: 100%;
  height: 12.75vh;
  justify-content: ${(props) => props.justify || "center"};
  align-items: center;
  border-right: 1px solid #ccc;
`;
