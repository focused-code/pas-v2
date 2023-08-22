import styled from "styled-components";

export const SearchAppend = styled.div.attrs(props => ({
    className: 'input-group-append',
  }))`
    border: none;
    span i{
      opacity: 0.5;
    }
  `;