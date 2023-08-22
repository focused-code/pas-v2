import styled from "styled-components";
import { light_blue } from "../variables/colors"
export const Title = styled.h4`
    color: white;
    font-size: 1.4rem;
    font-weight: bold;
    text-align: center;
    text-shadow: -1px -1px 0 orange, 1px -1px 0 orange, -1px 1px 0 orange, 1px 1px 0 orange;
    width:100%;
    position: absolute;
    top:10%;
    left:0;
    `;

export const PDFLink = styled.a`
    display:block;
    text-align: center;
    text-decoration: underline;
    width:100%`;

export const AudioLink = styled.a`
    cursor: pointer;
    display:block;
    text-align: center;
    text-decoration: underline;
    width:100%`;

export const Inner = styled.div`
    aspect-ratio : 1 / 1;
    box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
    position: relative;
    // height: 15rem;
`

export const Video = styled.div`
    
    border:1px solid #f5f5f5;
    width: 100%;
    height:100%;
`;

export const PlayButton = styled.a`
    position: absolute;
    left:0;
    font-size: 2rem;
    color: orange;
    text-align: center;
    top:calc((100% - 2rem)/2);
    width:100%;
`