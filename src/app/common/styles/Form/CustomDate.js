import Flatpickr from 'react-flatpickr';
import styled from 'styled-components';

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