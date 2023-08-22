import styled from "styled-components";

export const LessonsContainer = styled.section.attrs(props => ({
    className: 'row',
}))`
  display: flex;
  background-color: transparent;
  width: 100%;
  max-width: 100%;
  margin: 2rem 0;
  flex-wrap: wrap;
  max-height: 42.5rem;
  overflow-y: auto;
`;