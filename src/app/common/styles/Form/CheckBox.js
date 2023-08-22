import styled from "styled-components";

export const CheckBox = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.6rem;
  & > input{
      width: 20px;
      height: 20px;
  }
  input[type=checkbox], input[type=radio] {
    box-sizing: border-box;
    padding: 0;
    accent-color: #28a745;
}
`;