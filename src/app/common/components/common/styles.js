
import styled from 'styled-components/macro';
import Select from 'react-select';
import { InputGroupAddon } from 'reactstrap';
import PhoneInput from 'react-phone-number-input'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { mix, lighten } from 'polished';
import Flatpickr from 'react-flatpickr';

export const CustomIcon = styled(InputGroupAddon)`
  color: rgb(191, 191, 191) !important;
`;

export const PhoneInputInput = styled(PhoneInput)`
  input{
    font-size: 0.75rem;
    width: 100%;
    padding: 0.425rem;
    border: 1px dotted #868686;
    background-color: #fefefe;
    border-radius: 2px;
  }
`;

export const CustomDate = styled(Flatpickr)`
  background-color: #e9ecef;
  font-size: 0.72rem;
  border-radius: 0.12rem;
  padding: 0.375rem 0.75rem;
  width: ${props => props.width || '100%'};
  border: 1px dotted #868686;
  :focus-visible{
    border: 1px solid #868686;
    outline: none;
  }
`;

export const Box = styled.section`
  & > .error{
    color: red;
    font-size: 0.75rem;
  }
`;

export const Label = styled.label`
  font-family: 'Open Sans', sans-serif;
  width: ${props => props.width || '100%'};
  padding: 0.425rem;
  padding-left: 0;
  padding-bottom: 0;
  background-color: ${props => props.background || 'inherit'};
  font-size: ${props => props.fontsize || '0.72rem'};
  text-align: ${props => props.align || 'left'};
  text-transform: ${props => props.transform || 'none'};
  margin: 0;
  font-weight: 600;
`;

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  width: ${props => props.width || '100%'};
  padding: 0.425rem;
  border: 1px dotted #868686;
  background-color: #fefefe;
  border-radius: 2px;
  :focus-visible{
    border: 1px solid #868686;
    outline: none;
  }
  ::-webkit-input-placeholder {
    font-size: 0.75rem;
  }
  :-ms-input-placeholder {
     font-size: 0.75rem;
  }
`;

export const OtpInput = styled.input`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  width: ${props => props.width || '100%'};
  padding: 0.425rem;
  border: 1px dotted #868686;
  background-color: #fefefe;
  border-radius: 2px;
  border: 2px solid #eee !important;
  :focus-visible{
    border: 1px solid #868686;
    outline: none;
  }
  ::-webkit-input-placeholder {
    font-size: 0.75rem;
  }
  :-ms-input-placeholder {
     font-size: 0.75rem;
  }
`;

export const Textarea = styled.textarea`
  font-family: 'Open Sans', sans-serif;
  font-size: 0.75rem;
  width: ${props => props.width || '100%'};
  padding: 0.525rem;
  border: 1px dotted #868686;
  background-color: #fefefe;
  border-radius: 2px;
  :focus-visible{
    border: 1px solid #868686;
    outline: none;
  }
  ::-webkit-input-placeholder {
    font-size: 0.75rem;
  }
  :-ms-input-placeholder {
     font-size: 0.75rem;
  }
`;

export const CSelect = styled(Select)`
& .c-select__indicators div{
  padding: 5px;
}
& .c-select__input-container{
  padding-top: 0;
  padding-bottom: 0;
}
`;


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
      ${props => (props.highlighted)?
        `background: yellow;
        width: 30px;
        right: 1px;
        top: 1px;
        height: 28px;
        border-radius: 2px;
        padding: 7px 0 0 8px;
      ` :``
      }
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
      padding: 0px 0.638rem;
      font-weight: 300;
      font-size: 0.75rem;
      line-height: 1.75;
      color: ${props => props.color || '#333'};
      background-color: ${props => props.bcolor || '#fff'};
      background-image: none;
      border: ${props => (props.inactive) ? '1px dotted #aaa' : '1px solid #aaa'};
      border: ${props => (props.inactive) ? '1px dotted #aaa' : `1px solid ${(props.bcolor === '#fff') ? '#aaa' : (props.bcolor) ? props.bcolor : '#aaa'}`};
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



export const Button = styled.button`
  background: #fff;
  color: #fff;
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
    background-color: ${mix(0.85, '#868686', '#fff')} !important;
    color: #fefefe !important;
  }
  &:hover {
    color: #fff !important;
  }
  &:focus {
    border-radius: 0;
  }
  &.btn-training {
    background: #ff6d00 !important;
    color: #fff !important;
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
      background-color: ${mix(0.85, '#b4b4b4', '#fff')} !important;
      color: #fefefe !important;
    }
    &:hover {
      background: ${lighten(0.2, '#ff6d00')} !important;
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


export const Editor = styled(CKEditor)`
  & .ck-button{
    background-color: transparent;
    border-color: transparent;
    font-family: 'Open Sans', sans-serif !important;
    font-weight: normal;
    font-size: 11px;
    text-transform: none;
    border-radius: 0;
  }
`;
