import styled from "styled-components";

export const SelectContainer = styled.div`
    position: relative;
    float: left;
    width: ${props => props.width || '100%'};
    height: 30px;
    & > label{
      width: 100%;
    }
    &:after {
      content: '\f078';
      font: normal normal normal 0.75rem / 1 FontAwesome;
      color: #aaa;
      right: 11px;
      top: 5px;
      height: 20px;
      padding: 3px 0px 0px 8px;
      border-left: 1px solid #aaa;
      position: absolute;
      pointer-events: none;
      opacity: ${props => (props.inactive) ? '0.6' : '1'};
  }
  & > label > select {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-family: 'Open Sans', sans-serif;
      display: block;
      width: 100%;
      height: 30px;
      float: right;
      padding: 0px 0.938rem;
      font-weight: 300;
      font-size: 0.75rem;
      line-height: 1.75;
      color: #333;
      background-color: #ffffff;
      background-image: none;
      border: ${props => (props.inactive) ? '1px dotted #aaa' : '1px solid #aaa'};
      -ms-word-break: normal;
      word-break: normal;
      border-radius: 0.25rem;
      opacity: ${props => (props.inactive) ? '0.6' : '1'};
      pointer-events: ${props => (props.inactive) ? 'none' : 'inherit'};
  }
  & > label > select::-ms-expand {
      display: none;
  }
  & > label > select:focus-visible {
      outline: none;
  }
`;