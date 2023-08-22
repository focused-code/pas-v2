import { Badge } from "reactstrap";
import { colors, device, maxDevice } from "../variables";
import styled from "styled-components";

export const StepBadge = styled(Badge)`
    color: #fff;
    font-weight: 800;
    background-color: ${colors.GRAY};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    padding: 1.95rem 1rem 1rem 1rem;
    display: flex;
    vertical-align: middle;
    text-align: center;
    font-size: 1.5rem;
    flex-direction: row;
    justify-content: space-around;

    &.active, &.checked{
      background-color: ${colors.DARK_BLUE} !important;
    }

    @media only screen and ${device.laptopL} {
      padding: 2.15rem 1rem 1rem 1rem !important;
      font-size: 1.75rem !important;
      line-height: 0rem !important;
      height: 4.75rem !important;
  }
  @media only screen and ${device.desktop} {
    padding: 2.35rem 1rem 1rem 1rem !important;
    font-size: 1.75rem !important;
    line-height: 0rem !important;
    width: 4.8rem !important;
}
    @media only screen and ${device.tablet} {
      padding: 1.45rem 1rem 1rem 1rem;
      font-size: 1.25rem;
      line-height: 1.5rem;
      height: 4.5rem;
      width: 4.5rem;
  }
  @media only screen and ${maxDevice.tabletM} {
    padding: 1.45rem 1rem 1rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5rem;
    width: 5.5vw;
}

  
`;