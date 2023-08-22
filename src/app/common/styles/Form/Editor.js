import styled from "styled-components";
import { CKEditor } from '@ckeditor/ckeditor5-react';

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
