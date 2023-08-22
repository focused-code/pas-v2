import styled from "styled-components";

export const SearchBox = styled.section.attrs(props => ({
    className: 'search-box',
  }))`
    margin: 0;
    width: 100%;
    & > div.input-group{
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
      border: 2px solid #169bd6;
      border-radius: 0.2rem;
      width: 100%;
    }
    & > div.input-group > input:focus{
      box-shadow: none;
    }
    & > div.input-group > div.input-group-append > span.input-group-text{
      border-radius: 0.2rem;
      border: none;
    }
  `;
  