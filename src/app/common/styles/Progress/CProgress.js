import { Progress } from "reactstrap";
import styled from "styled-components";

export const CProgress = styled(Progress)`
    width: 100%;
    border-radius: 0;
    font-size: 0.85rem;
    font-weight: 650;
    margin-top: 5%;
    & > .progress-bar {
      padding: 0 5px;
    }
`;