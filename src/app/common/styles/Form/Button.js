import styled from 'styled-components/macro';
import { mix, darken, lighten } from 'polished';
import { colors } from "../variables";

export const Button = styled.button`
  background-color: ${colors.LIGHT_BLUE};
  color: ${colors.WHITE};
  border: none;
  margin: ${props => props.margin || '0 5px'};
  width: ${props => props.width || 'auto'};
  padding: 3px 10px;    
  border-radius: 2px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
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
    background-color: ${mix(0.85, '#868686', colors.WHITE)} !important;
    color: #fefefe !important;
  }
  &:focus {
    border-radius: 0;
  }
  &.btn-submit {
    background: #179ad6;
    text-transform: uppercase !important;
    font-weight: 600;
    color: ${mix(0.7, '#fefefe', colors.WHITE)} !important;
    &:hover {
      background: ${darken(0.5, '#179ad6')} !important;
      color: ${mix(0.85, '#fefefe', colors.WHITE)} !important;
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
  &.btn-disabled-link {
    text-transform: uppercase !important;
    font-weight: 600;
    background: #fefefe !important;
    border: 1px solid #868686 !important;
    color: #868686 !important;
   
    &:hover {
      background: ${darken(0.5, '#eee')} !important;
      color: ${mix(0.85, '#fefefe', colors.WHITE)} !important;
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
  &.btn-simple-link {
    background-color: transparent !important;
    color: #179ad6 !important;
    text-align: left;
    text-transform: none !important;
    margin: 0 !important;
    padding: 0 !important;
    &:hover {
      text-decoration: underline;
      color: #14143f !important;
    }
    &:focus {
      box-shadow: none;
    }
    & > i.hasnote{
      color: orange;
    }
  }
  &.btn-link {
    background: transparent;
    color: #179ad6 !important;
    &:hover {
      background: ${darken(0.5, '#179ad6')} !important;
      color: ${mix(0.7, '#fefefe', colors.WHITE)} !important;
      text-decoration: none;
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
  &.btn-link-trash {
    background: transparent;
    color: #dc3545 !important;
    &:hover {
      background: ${darken(0.5, '#179ad6')} !important;
      color: ${mix(0.7, '#fefefe', colors.WHITE)} !important;
      text-decoration: none;
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
      color: ${colors.WHITE} !important;
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
  &.btn-trash {
    background: #dc3545;
    margin: 0 3px;
    color: ${mix(0.7, '#fefefe', colors.WHITE)} !important;
    &:hover {
      background: ${darken(0.5, '#dc3545')} !important;
      color: ${mix(0.85, '#fefefe', colors.WHITE)} !important;
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
  &.btn-save {
    background: #408f4d;
    text-transform: none;
    color: ${mix(0.7, '#fefefe', colors.WHITE)} !important;
    &:hover {
      background: ${darken(0.2, '#408f4d')} !important;
      color: ${mix(0.85, '#fefefe', colors.WHITE)} !important;
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
    & > i{
      color: ${colors.WHITE};
      font-size: 0.75rem !important;
    }
  }
  &.btn-cancel {
    background: #eee !important;
    border: 1px solid #868686 !important;
    color: #868686 !important;
    &:hover {
      background: ${darken(0.5, '#eee')} !important;
      color: ${colors.WHITE} !important;
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
  &.btn-training {
    background: ${colors.LIGHT_BLUE} !important;
    color: ${mix(0.7, '#fefefe', colors.WHITE)} !important;
    align-items: center;
    display: flex;
    padding: 0 8px 0 5px;
    border-radius: 3px;
    text-transform: none;
    margin: 0 5px;
    & > svg{
      height: auto;
      float: left;
      fill: #fefefe;
    }
    &:disabled {
      background-color: ${mix(0.85, '#b4b4b4', colors.WHITE)} !important;
      color: #fefefe !important;
    }
    &:hover {
      background: ${lighten(0.2, colors.LIGHT_BLUE)} !important;
      color: ${mix(0.85, '#fefefe', colors.WHITE)} !important;
      & > svg{
        fill: ${colors.WHITE};
      }
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
  &.btn-green{
    background: ${colors.GREEN} !important;
    background-color: ${colors.GREEN} !important;
  }
`;