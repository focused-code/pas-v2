import styled from "styled-components";

export const LessonsContainerSM = styled.section.attrs(props => ({
    className: '',
}))`
  display: flex;
  background-color: transparent;
  width: 100%;
  max-width: 100%;
  flex-wrap: wrap;
  max-height: 42.5rem;
  overflow-y: auto;
`;