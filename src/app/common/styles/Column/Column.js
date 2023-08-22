import styled from "styled-components";
import { colors } from "../variables";

export const Column = styled.section`
  // display: flex;
  flex:1;
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};
  &.bordered{
    border: 1px solid ${colors.GRAY};
  }
  > div{
    &.bordered{
      border: 1px solid ${colors.GRAY};
    }
  }
  &.active{
    border-color: ${colors.DARK_BLUE};
  }
`;