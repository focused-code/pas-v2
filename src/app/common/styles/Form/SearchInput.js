import styled from "styled-components";

export const SearchInput = styled.input`
font-weight: bold;
font-size: 0.8rem;
border: none;
:focus-visible{
  border: none;
  outline: none;
}
::placeholder{
  color: #000 !important;
  font-weight: bold;
  font-size: 0.8rem;
}
:-ms-input-placeholder { /* Internet Explorer 10-11 */
    color: #000 !important;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: #000 !important;
}
`;