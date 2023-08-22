import styled from 'styled-components/macro';
import { mix, darken, lighten } from 'polished';


export const Container = styled.section`
    width: 100%;
    min-height: 250px;
`;

export const Solution = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    color: #4898d1;
    font-size: 0.85rem;
    & > .solution-box{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        border-radius: 4px;
        box-shadow: var(--ds-shadow-overlay, 0 3px 3px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
        padding: 0.6rem;
        width: 100%;
    }
    & > hr{
        margin-left: 0.6rem;
        border-color: #868686;
        border-top: 1px dotted #868686;
        width: 100%;
    }
    & > .howto-box{
        display: flex;
        flex-direction: column;
        background-color: #f2f2f2;
        border-radius: 4px;
        box-shadow: var(--ds-shadow-overlay, 0 3px 3px -2px rgba(9, 30, 66, 0.25), 0 0 1px rgba(9, 30, 66, 0.31));
        padding: 0.6rem;
        margin-left: 5%;
        width: 95%;
    }
`;

export const Buttons = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Response = styled.section`
    width: 100%;
    display: flex;
    padding: 0.6rem;
    &.error{
      color: red;
    }
    &.howto{
        font-style: italic;
    }
`;

export const ButtonBox = styled.section`
    display: flex;
    align-items: center;
`;


export const Button = styled.button`
  background: #fff;
  color: #fff;
  border: none;
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
  &.btn-question {
    padding: 1%;
    width: 20px;
    height: 20px;
    line-height: 0.5;
    border-radius: 20px !important;
    display: inline-block;
    margin-left: 5px;
    background-color: #02b050 !important;
    border-color: #02b050 !important;
    &:hover {
      background: ${darken(0.5, '#179ad6')} !important;
      color: ${mix(0.85, '#fefefe', '#fff')} !important;
    }
    &:focus {
      box-shadow: none;
    }
  }
  &.btn-outline {
    background: transparent;
    text-transform: uppercase;
    border: none;
    color: ${mix(0.3, '#fefefe', '#000')} !important;
    padding: 0;
    &:disabled {
      background: #eee !important;
      color: #c5cad2 !important;
      & > svg{
        height: auto;
        fill: #c5cad2;
      }
      &:hover{
        background-color: transparent !important;
        color: #c5cad2 !important;
        & > svg{
          height: auto;
          fill: #c5cad2;
        }
      }
    }
    &:hover {
      color: #179ad6 !important;
      
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

