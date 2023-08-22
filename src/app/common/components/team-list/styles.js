import styled from 'styled-components/macro';
import { mix, lighten, darken } from 'polished';

export const Container = styled.section`
  display: flex;
  background-color: #fff;
  border-radius: 0.156rem;
  padding: 0.85rem;
  box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 6%) 0px 1px 2px 0px;
`;

export const Heading = styled.h5`
    font-size: 0.8rem;
    color: #212529;
    font-weight: 600;
    margin-bottom: 0.5rem;
    &.blur{
      color: transparent;
      text-shadow: 0 0 5px rgba(0,0,0,0.5);
    }
`;

export const InputGroup = styled.section`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  justify-content: flex-end;
  & > label{
    margin: 0;
    margin-right: 0.5rem;
    font-weight: 600;
  }
`;

export const CommonSearch = styled.select`
  height: 1.875rem;
  padding: 0.2rem 0.938rem;
  font-weight: 300;
  font-size: 0.75rem;
  border-radius: 0.25rem;
  border: 1px solid #aaa;
  &.inactive{
      border: 1px dotted #aaa;
      pointer-events: none;
      opacity: 0.6;
  }
`;

export const DownloadBox = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1.5;
  > span {
      font-style: italic;
      text-align: center;
  }
`;

export const ClientBox = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 0 0.8rem;
  & > span{
    color: green;
    margin-top:0.5rem;
    margin-left:30%;
  }
`;


export const ImageBox = styled.section`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex: 1.5;
  > img{
      width: 100%;
      border-radius: 2.5px;
  }
`;

export const BioBox = styled.section`
  display: flex;
  width: 70%;
  flex-direction: column;
  > p{
      margin: 0;
  }
  > section{
      padding-top: 0.5rem;
      display: flex;
  }
  > section.notes{
      font-style: italic;
  }
   > section.attention{
      padding-top: 0.5rem;
      display: block;
      font-size: 0.8rem;
      font-weight: 600;
      color: red;
  }
  > section span{
      margin-right: 0.7rem;
  }
  > section label{
      display: inline-block;
      font-weight: 600;
      margin:0;
      margin-right: 0.5rem;
  }
  &.blur{
      color: transparent;
      text-shadow: 0 0 5px rgba(0,0,0,0.5);
    }
`;


export const SeachLoader = styled.section`
  display: flex;
  justify-content: space-between;
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  height: 1.875rem;
  padding: 0.3rem 0.938rem;
  font-weight: 300;
  font-size: 0.75rem;
  border: 1px solid #aaa;
  border-radius: 0.25rem;
  align-items: center;
  border-right: 1px solid #e9ecef;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

export const DownloadButton = styled.a`
  background: #fff;
  color: #fff;
  border: none;
  margin: ${props => props.margin || '0 5px'};
  width: ${props => props.width || 'auto'};
  padding: ${props => props.padding || '3px 10px'};
  border-radius: 2px;
  letter-spacing: 0.06em;
  text-transform: ${props => props.transform || 'uppercase'};
  text-decoration: none;
  outline: none;
  font-size: 0.7rem;
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  float: ${props => props.float || 'none'};
  &.btn-download {
    background: transparent;
    color: ${mix(0.7, '#fefefe', '#868686')} !important;
    align-items: center;
    display: flex;
    padding: 0;
    border-radius: 3px;
    text-transform: none;
    margin: 0;
    & > svg{
      height: auto;
      float: left;
      fill: #000;
    }
    &:disabled {
      background-color: ${mix(0.85, '#b4b4b4', '#fff')} !important;
      color: #fefefe !important;
    }
    &:hover {
      background: ${lighten(0.9, '#000')} !important;
      color: ${mix(0.85, '#fefefe', '#fff')} !important;
      & > svg{
        fill: #868686;
      }
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
`;

export const Button = styled.button`
  background: #fff;
  color: #fff;
  border: none;
  margin: ${props => props.margin || '0 5px'};
  width: ${props => props.width || 'auto'};
  padding: ${props => props.padding || '3px 10px'};
  border-radius: 2px;
  letter-spacing: 0.06em;
  text-transform: ${props => props.transform || 'uppercase'};
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
  &.btn-simple-link {
    background: transparent;
    color: #179ad6 !important;
    text-align: left;
    font-size: 0.6rem;
    text-transform: none !important;
    &:hover {
      text-decoration: underline;
      color: #14143f !important;
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
      text-decoration: none;
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
      text-decoration: none;
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
      text-decoration: none;
    }
  }
  &.btn-training {
    background: #009bde !important;
    color: ${mix(0.7, '#fefefe', '#fff')} !important;
    padding: 0;
    margin: 0 5px;
    & > svg{
      height: auto;
      float: left;
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

  &.btn-download {
    background: transparent;
    color: ${mix(0.7, '#fefefe', '#868686')} !important;
    align-items: center;
    display: flex;
    padding: 0;
    border-radius: 3px;
    text-transform: none;
    margin: 0;
    & > svg{
      height: auto;
      float: left;
      fill: #000;
    }
    &:disabled {
      background-color: ${mix(0.85, '#b4b4b4', '#fff')} !important;
      color: #fefefe !important;
    }
    &:hover {
      background: ${lighten(0.9, '#000')} !important;
      color: ${mix(0.85, '#fefefe', '#fff')} !important;
      & > svg{
        fill: #868686;
      }
    }
    &:focus {
      box-shadow: none;
      text-decoration: none;
    }
  }
`;


export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

export const Bottom = styled.section.attrs(props => ({
  className: 'animate__animated animate__fadeIn',
}))`
  display: flex;
  width: 100%;
  min-height: 4.25rem;
  flex-direction: column;
  justify-content: center;
  border-top: none;
  & > p{
    text-align: center;
    font-size: 0.6rem;
  }

  & > .form-group{
    margin: 0;
  }
`;

export const ImagePlaceholder = styled.section`
  align-items: center;
  justify-content: center;
  display: flex;
  color: #16163f;
  width: 100%;
  height: 86.75px;
  z-index: 2;
  background-color: #eee;
  text-align: center;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  border-radius: 2px;
`;


export const Calendar = styled.section`
 background: #DAE3F2;
`