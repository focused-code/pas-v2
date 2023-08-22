import styled from "styled-components";
import { colors } from "../variables";

export const UnstyledList = styled.ul`
    list-style: none;
    padding-inline-start: 0;
    &.bordered{
        border: 1px solid ${colors.GRAY};
      }
`;