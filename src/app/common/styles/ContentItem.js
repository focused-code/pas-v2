import { slideInAnimation, slideOutAnimation, slideUpAnimation, slideDownAnimation } from "./Animations";
import { STAGGER, duration } from "./variables";
import styled from "styled-components";

export const ContentItem = styled.section`
  &.appear,
  &.enter {
    animation-name: ${slideInAnimation};
    animation-duration: ${duration.enter}ms;
    animation-timing-function: ease-in-out;
  }
  animation-fill-mode: both;
  &.appear {
    animation-name: ${slideUpAnimation};
    animation-delay: ${(props) => props.index * STAGGER}ms;
  }
  &.exit {
    animation-name: ${slideOutAnimation};
    animation-duration: ${duration.exit}ms;
    animation-timing-function: ease-in-out;
  }
`;