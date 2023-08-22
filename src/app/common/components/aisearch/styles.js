import styled from 'styled-components/macro';

const sizes = {
    mobileS: '320px',
    mobileM: '375px',
    mobileL: '425px',
    tablet: '768px',
    tabletL: '1024px',
    tabletM: '1280px',
    laptop: '1360px',
    laptopL: '1440px',
    desktop: '1920px',
    desktopL: '2560px',
};

export const device = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    mobileL: `(min-width: ${sizes.mobileL})`,
    tablet: `(min-width: ${sizes.tablet})`,
    tabletM: `(min-width: ${sizes.tabletM})`,
    tabletL: `(min-width: ${sizes.tabletL})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
    desktopL: `(min-width: ${sizes.desktopL})`,
};

export const maxDevice = {
    mobileS: `(max-width: ${sizes.mobileS})`,
    mobileM: `(max-width: ${sizes.mobileM})`,
    mobileL: `(max-width: ${sizes.mobileL})`,
    tablet: `(max-width: ${sizes.tablet})`,
    tabletL: `(max-width: ${sizes.tabletL})`,
    laptop: `(max-width: ${sizes.laptop})`,
    laptopL: `(max-width: ${sizes.laptopL})`,
    desktop: `(max-width: ${sizes.desktop})`,
    desktopL: `(max-width: ${sizes.desktopL})`,
};


export const Container = styled.section`
    position: fixed;
    inset: 0px auto auto 0px;
    transform: translate3d(50vw, 52px, 0px);
    display: block;
    box-sizing: border-box;
    z-index: 400;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: auto;
    background-color: var(--ds-surface-overlay, #FFFFFF);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    box-shadow: var(--ds-shadow-overlay, 0 4px 8px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
    overflow-x: auto;
    overflow-y: auto;

    @media only screen and ${device.mobileS} {
        transform: translate3d(50vw, 52px, 0px);
    }
    @media only screen and ${device.mobileM} {
        transform: translate3d(50vw, 52px, 0px);
    }

    @media only screen and ${device.mobileL} {
        transform: translate3d(50vw, 52px, 0px);
    }

    @media only screen and ${maxDevice.tablet} {
        transform: translate3d(50vw, 10vh, 0px);
    }

    @media only screen and ${device.tabletM} {
        transform: translate3d(50vw, 52px, 0px);
    }

    @media only screen and ${maxDevice.tabletL} {
        transform: translate3d(50vw, 52px, 0px);
    }

    @media only screen and ${device.laptop} {
        transform: translate3d(50vw, 52px, 0px);
    }

    @media only screen and ${device.laptopL} {
        transform: translate3d(50vw, 52px, 0px);
    }

    @media only screen and ${device.desktop} {
        transform: translate3d(50vw, 52px, 0px);
    }

    @media only screen and ${device.desktopL} {
        transform: translate3d(50vw, 6vh, 0px);
    }
`;

export const SubContainer = styled.section`
    width: 50vw;
    height: calc(-100px + 100vh);
    display: flex;
`;

export const Main = styled.section`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    overflow-y: auto;
`;


export const LoaderContainer = styled.section`
    height: 100%;
    background-color: #fff;
    padding-bottom: 0.7rem;
`;

export const Header = styled.header`
    font-size: 14px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    margin-top: 24px;
    margin-right: 18px;
    margin-bottom: 18px;
    margin-left: 24px;
    flex-direction: row !important;

    span{
        font-size: 12px;
    }
    span.closer{
        font-size: 20px;
        margin-left: 1rem;
        color: #aaa;
        i{
            cursor: pointer;
        }
    }
    button{
        -webkit-box-align: baseline;
        align-items: baseline;
        border-radius: 2.5px;
        box-sizing: border-box;
        display: inline-flex;
        font-size: inherit;
        font-style: normal;
        font-family: inherit;
        font-weight: 500;
        max-width: 100%;
        position: relative;
        text-align: center;
        text-decoration-line: none;
        white-space: nowrap;
        background-color: initial;
        cursor: pointer;
        height: auto;
        line-height: inherit;
        padding-top: 0px;
        vertical-align: baseline;
        width: auto;
        -webkit-box-pack: center;
        justify-content: center;
        color: var(--ds-text-subtle, #6B778C);
        &:hover{
            background-color: #aaa;
            border-color: #aaa;
            color: #fff;
        }
        &:disabled{
            background-color: #aaa;
            border-color: #aaa;
            color: #fff;
            opacity: 0.4;
            &:hover{
               color: var(--ds-text-subtle, #6B778C); 
            }
        }
        span{
            font-size: inherit;
            font-style: normal;
            font-family: inherit;
            font-weight: 500;
            text-align: center;
            white-space: nowrap;
            cursor: pointer;
            line-height: inherit;
            color: var(--ds-text-subtle, #6B778C);
        }
        span:hover{
            color: #fff;
        }
    }
`;

export const Heading = styled.h2`
    font-size: 1.414286em;
    font-style: inherit;
    line-height: 1.166667;
    color: var(--ds-text, var(--ds-text, #172B4D));
    font-weight: 500;
    letter-spacing: -0.01em;
    -webkit-box-flex: 1;
    flex-grow: 1;
`;

export const TopLabel = styled.label`
    font-size: 14px;
    line-height: 20px;
    margin-right: 4px;
    font-weight: 400;
    color: var(--ds-text, #42526E);
`;

export const MainSection = styled.section`
    margin-left: 16px;
    margin-right: 16px;
`;

export const MainBox = styled.section`
    display: flex;
    max-width: 100%;
    min-height: 0%;
    flex-basis: 100%;
    flex-direction: column;
    -webkit-box-flex: 1;
    flex-grow: 1;
`;


export const Content = styled.section`
    width: 100%;
    margin-top: 18px;
    max-height: calc(-100px + 80vh);
    overflow-y: auto;
    overflow-x: hidden;
`;

export const Left = styled.section`
    display: flex;
    flex-direction: column;
    -webkit-box-flex: 1;
    flex-grow: 1;
    h3{
        display: inline;
        color: var(--ds-text, #172B4D);
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
    }
    h3.read{
        color: green;
    }
    section{
        font-size: 12px;
        font-weight: normal;
        margin: 10px 0;
    }
    
`;

export const Right = styled.section`
    width: 30px;
    margin-top: 18px;
    display: flex;
    align-items: center;
`;


export const Batch = styled.section`
    margin-bottom: 1.5rem;
`;

export const BatchItem = styled.section`
    border-bottom: 1px dotted grey;
    display: flex;
    width:100%;
    padding-left: 25px;
    padding-right: 25px;
    padding-top: 1rem;
    &:hover{
        background-color: var(--ds-background-neutral-subtle-hovered, #F4F5F7);
    }
`;

export const BatchContent = styled.section`
    background-color: transparent;
    transition-duration: 2s;
    transition-timing-function: ease;
    transition-delay: 0s;
    transition-property: background-color;
    margin-bottom: 4px;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-left-radius: 3px;
    display: flex;
    flex-direction: column;
`;


export const BatchHeader = styled.section`
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    -webkit-box-align: center;
    align-items: center;
    margin-bottom: 6px;
    min-height: 17px;
    h3{
        font-size: 14px;
        color: var(--ds-text-subtlest, #6B778C);
        font-weight: 600;
        text-transform: uppercase;
    }
    span{
        font-size: 12px;
    }
    button{
        -webkit-box-align: baseline;
        align-items: baseline;
        border-radius: 2.5px;
        box-sizing: border-box;
        display: inline-flex;
        font-size: inherit;
        font-style: normal;
        font-family: inherit;
        font-weight: 500;
        max-width: 100%;
        position: relative;
        text-align: center;
        text-decoration-line: none;
        white-space: nowrap;
        background-color: initial;
        cursor: pointer;
        height: auto;
        line-height: inherit;
        padding-top: 0px;
        vertical-align: baseline;
        width: auto;
        -webkit-box-pack: center;
        justify-content: center;
        color: var(--ds-text-subtle, #6B778C);
        span{
            font-size: inherit;
            font-style: normal;
            font-family: inherit;
            font-weight: 500;
            text-align: center;
            white-space: nowrap;
            cursor: pointer;
            line-height: inherit;
            color: var(--ds-text-subtle, #6B778C);
        }
    }
`;


export const NoteBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  padding-left: 0.5rem;
  background-color: #eeeeee;
  align-items: flex-start;
  border-radius: 2.5px;
`;


export const StyledNote = styled.section`
    p{
      color: #11143c;
      font-size: 0.78rem;
      width: 100%;
      padding: 0.4rem 0;
      display: inline-block;
      margin-bottom: 0;
    }
    p:hover{
      color: #15153e;
    }

    h1, h2{
        color: var(--ds-text, #172B4D);
        font-size: 1rem;
        font-weight: 500;
        line-height: 20px;
    }

    h3{
        color: var(--ds-text, #172B4D);
        font-size: 0.85rem;
        font-weight: 500;
        line-height: 20px;
    }

    h4{
        color: var(--ds-text, #172B4D);
        font-size: 0.75rem;
        font-weight: 500;
        line-height: 20px;
    }
  
    span{
      font-size: 0.65rem;
    }

    span.view-more{
      color: #029cdd;
      margin-left: 0.3rem;
      cursor: pointer;
    }
    span.view-more:hover{
      text-decoration: underline;
    }
    blockquote{
        display:block;
        background: #fff;
        margin: 10px 0 20px;
        padding: 10px 35px;
        position: relative;
        
        font-family: 'Open Sans', sans-serif !important;
        font-size: 0.85rem;
        color: #666;
        text-align: left;
        border-left: 5px solid #029cdd;

        h4{
            font-size: 0.85rem;
            margin:0;
        }
        p{
            color: #11143c;
            font-size: 0.78rem;
            width: 100%;
            padding: 0.4rem 0;
            display: inline;
            margin-bottom: 0;
        } 
    }

    blockquote::before {
      content: "\\201C";
      font-family: Georgia, serif;
      font-size: 40px;
      font-weight: bold;
      color: #999;
      position: absolute;
      left: 0;
      top: 0px;
  }

  blockquote::after {
      content: "";
  }
  blockquote a {
      text-decoration: none;
      background: #eee;
      cursor: pointer;
      padding: 0 3px;
      color: #c76c0c;
  }

  blockquote a:hover {
      color: #666;
  }

  blockquote em {
      font-style: italic;
  }

`;
