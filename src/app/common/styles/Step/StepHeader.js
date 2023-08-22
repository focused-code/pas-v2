import styled from "styled-components";
import { colors } from "../variables";

export const StepHeader = styled.h6`
background: ${colors.GRAY};
color: ${colors.WHITE};

&.active{
    background: ${colors.DARK_BLUE};
}
`
