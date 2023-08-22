import  styled  from "styled-components";
import { NavLink } from 'react-router-dom';
import { mix, darken } from 'polished';

export const ButtonLink = styled(NavLink)`
  background: #fff;
  color: #fff;
  border: none;
  margin: ${props => props.margin || '0 5px'};
  width: ${props => props.width || 'auto'};
  padding: ${props => props.padding || '3px 10px'};
  border-radius: 2px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  text-decoration: none;
  outline: none;
  font-size: ${props => props.fontsize || '0.6rem'};
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
  &.btn-prime {
    background: #179ad6;
    text-transform: none !important;
    color: ${mix(0.7, '#fefefe', '#fff')} !important;
    &:hover {
      background-color: #fff !important;
      color: #000 !important;
    }
    &:focus {
      box-shadow: none;
    }
  }
  &.btn-submit {
    background: #179ad6;
    color: ${mix(0.7, '#fefefe', '#fff')} !important;
    &:hover {
      background: ${darken(0.5, '#179ad6')} !important;
      color: ${mix(0.85, '#fefefe', '#fff')} !important;
    }
    &:focus {
      box-shadow: none;
    }
  }
  &.btn-save {
    background: #408f4d !important;
    color: ${mix(0.7, '#fefefe', '#fff')} !important;
    &:hover {
      background: ${darken(0.2, '#408f4d')} !important;
      color: ${mix(0.85, '#fefefe', '#fff')} !important;
    }
    &:focus {
      box-shadow: none;
    }
  }
`;