import { Badge } from "reactstrap";
import styled from "styled-components";
import { device } from "../variables";

export const InnerProgressBadge = styled(Badge)`
    color: #fff;
    background: #101242;
    z-index: 100;
    font-weight: 600;
    font-size: 2em;
    height: 9vh;
    width: 5vw;
    line-height: 6.5vh;
    text-align: center;
    border-radius: 50%;
    margin-top: 1.1vh;
    border: 5px solid #ffffff !important;
    @media only screen and ${device.desktop} {
      font-size: 3em;
      margin-top: 1.25vh;
  }
`;