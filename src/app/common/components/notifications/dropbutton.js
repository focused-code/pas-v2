import { useState } from 'react';
import { DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { StyledButton, StyledItem } from './button-styles';
import { Icon } from './icon';
import { checkStatus } from './helpers';


const DropDown = (props) => {

    const { notice, toggle, user, status } = props;

    const [dropdownOpen, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!dropdownOpen);

    const toggleStatus = () => {
        toggle({ notification_id: notice.id, user_id: user.id });
    };

    return (
        <StyledButton isOpen={dropdownOpen} toggle={toggleMenu}>
            <DropdownToggle caret>
                <Icon color={(status ? '#868686' : 'green')} />
            </DropdownToggle>
            <DropdownMenu>
                <StyledItem onClick={toggleStatus}>{(status) ? 'Mark as Unread' : 'Mark as Read'}</StyledItem>
            </DropdownMenu>
        </StyledButton>
    );
}

export default DropDown;