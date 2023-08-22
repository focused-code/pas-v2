import Flatpickr from 'react-flatpickr';
import styled from 'styled-components';

export const Picker = styled(Flatpickr)`
  line-height: 1.4rem;
  border-color: #169bd6; /*hsl(0,0%,80%);*/
  border-radius: 2.5px;
  border-style: solid;
  border-width: 2px;
  padding: 2px 8px;
  font-family: 'Open Sans', sans-serif;
  font-size: 0.72rem !important;
  font-weight: bold;
  color: #000;
  width: 14vw;
  :focus-visible{
    border: 2px solid #0e7fe1;
    outline: none;
    border-radius: 1px;
  }
  ::placeholder{ { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #000 !important;
  font-size: 0.72rem;
  font-weight: 'bold';
  }
  :-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: #212529 !important;
  }

  ::-ms-input-placeholder { /* Microsoft Edge */
  color: #212529 !important;
  }
`;