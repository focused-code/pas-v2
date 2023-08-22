import styled from 'styled-components/macro';
import { ButtonDropdown, DropdownItem } from 'reactstrap';

export const StyledItem = styled(DropdownItem)`
    text-transform: none !important;
`;

export const StyledButton = styled(ButtonDropdown)`
    &.btn-group{
        background-color: transparent;
        &:focus-visible{
            outline:none;
        }
        button{
            background-color: transparent;
            border: none;
            padding: 0.5rem;
            svg{
                width: 20px;
            }
            &::after{
                border-right: green;
                display: none;
            }
            &:focus{
                outline:none;
                border: none;
                box-shadow: none;
            }
            &.dropdown-toggle{
                background-color: transparent;
                border: none;
                &:focus{
                    outline:none;
                    border: none;
                    box-shadow: none;
                }
            }
        }
    }
`;