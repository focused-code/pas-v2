import styled from 'styled-components/macro';
import { mix, darken, lighten } from 'polished';
import { ReactMarkdown } from "react-markdown/lib/react-markdown";

export const Container = styled.section`
    width: 100%;
`;


export const Solution = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #4898d1;
    font-size: 0.85rem;
    label {
      font-weight: bold;
    }
    label.error {
      color: red;
    }
    & > .form-box{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        border-radius: 4px;
        box-shadow: var(--ds-shadow-overlay, 0 3px 3px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
        padding: 0.6rem;
        width: 100%;
        textarea{
          width: 100%;
          border-radius: 4px;
          padding: 0.8rem;
          font-size: 1rem;
          color: #00000;
        }
        textarea:disabled{
          color: #868686;
        }
    }
    & > hr{
        margin-left: 0.6rem;
        border-color: #868686;
        border-top: 1px dotted #868686;
        width: 100%;
    }
    & > .response-box{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        border-radius: 4px;
        box-shadow: var(--ds-shadow-overlay, 0 3px 3px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
        padding: 0.6rem;
        width: 100%;
    }
    & > .error-box{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        color: red;
        border-radius: 4px;
        box-shadow: var(--ds-shadow-overlay, 0 3px 3px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
        padding: 0.6rem;
        width: 100%;
    }
`;

export const Buttons = styled.section`
    width: 100%;
    display: flex;
    padding: 0.6rem 0;
    justify-content: space-between;
`;

export const Response = styled.section`
    width: 100%;
    display: flex;
    padding: 0.6rem;
    max-height: 14rem;
    overflow-y: auto;
    &.howto{
        font-style: italic;
    }
`;

export const ResponseMarkdown = styled(ReactMarkdown)`
    width: 100%;
    display: block;
    padding: 0.6rem;
    overflow-y: auto;
    &.howto{
        font-style: italic;
    }
    table,tbody,tr,td,th{
      border: 1px solid #4898d1;
    }
`;

export const Button = styled.button.attrs(props => ({
  type: 'button',
}))`
  background: #fff;
  color: #fff;
  border: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${props => props.margin || '0 5px'};
  width: ${props => props.width || 'auto'};
  padding: 3px 10px;    
  border-radius: 2px;
  letter-spacing: 0.06em;
  text-decoration: none;
  outline: none;
  font-size: 0.7rem;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  float: ${props => props.float || 'none'};
  & > i{
    margin-right: 0.4rem;
  }
  &:disabled {
    background: #eee !important;
    color: #868686 !important;
  }
  &:disabled&:hover {
    background-color: ${mix(0.85, '#868686', '#fff')} !important;
    color: #fefefe !important;
  }
  &:hover {
    color: #fff !important;
  }
  &:focus {
    border-radius: 0;
  }
  &.btn-link {
    background: transparent;
    color: #179ad6 !important;
    &:hover {
      background: ${darken(0.5, '#179ad6')} !important;
      color: ${mix(0.7, '#fefefe', '#fff')} !important;
      text-decoration: none;
    }
    &:focus {
      box-shadow: none;
    }
  }
  &.btn-link-trash {
    background: transparent;
    color: #dc3545 !important;
    &:hover {
      background: ${darken(0.5, '#179ad6')} !important;
      color: ${mix(0.7, '#fefefe', '#fff')} !important;
      text-decoration: none;
    }
    &:focus {
      box-shadow: none;
    }
  }
  &.btn-submit {
    background: #179ad6;
    text-transform: uppercase;
    color: ${mix(0.7, '#fefefe', '#fff')} !important;
    &:hover {
      background: ${darken(0.5, '#179ad6')} !important;
      color: ${mix(0.85, '#fefefe', '#fff')} !important;
    }
    &:focus {
      box-shadow: none;
    }
    & > svg{
      height: auto;
      fill: #fefefe;
    }
  }
  &.btn-outline {
    background: transparent;
    text-transform: uppercase;
    border-radius: 3px;
    border: 1px solid ${mix(0.3, '#fefefe', '#000')};
    color: ${mix(0.3, '#fefefe', '#000')} !important;
    &:hover {
      color: #179ad6 !important;
      border: 1px solid #179ad6;
      & > svg{
        height: auto;
        fill: #179ad6;
      }
    }
    &:focus {
      box-shadow: none;
    }
    & > svg{
      height: auto;
      fill: ${mix(0.3, '#fefefe', '#000')};
    }
  }
  &.btn-trash {
    background: #dc3545;
    margin: 0 3px;
    color: ${mix(0.7, '#fefefe', '#fff')} !important;
    &:hover {
      background: ${darken(0.5, '#dc3545')} !important;
      color: ${mix(0.85, '#fefefe', '#fff')} !important;
    }
    &:focus {
      box-shadow: none;
    }
  }
  &.btn-save {
    background: #408f4d !important;
    width: 20%;
    color: ${mix(0.7, '#fefefe', '#fff')} !important;
    &:hover {
      background: ${darken(0.2, '#408f4d')} !important;
      color: ${mix(0.85, '#fefefe', '#fff')} !important;
    }
    &:focus {
      box-shadow: none;
    }
  }
  &.btn-cancel {
    background: #eee !important;
    border: 1px solid #868686 !important;
    color: #868686 !important;
    &:hover {
      background: ${darken(0.5, '#eee')} !important;
      color: #fff !important;
    }
    &:focus {
      box-shadow: none;
    }
  }
  &.btn-training {
    background: #009bde !important;
    color: ${mix(0.7, '#fefefe', '#fff')} !important;
    padding: 0;
    margin: 0 5px;
    & > svg{
      height: auto;
      fill: #fefefe;
    }
    &:hover {
      background: ${lighten(0.2, '#009bde')} !important;
      color: ${mix(0.85, '#fefefe', '#fff')} !important;
      & > svg{
        fill: #fff;
      }
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
`;

