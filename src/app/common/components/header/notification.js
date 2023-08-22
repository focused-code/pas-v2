import { useContext } from 'react';
import classNames from 'classnames';
import { ReactComponent as BellOne } from './bell-one.svg';
import { ReactComponent as BellTwo } from './bell-two.svg'; // With activity
import { NotificationsContext } from '../../state';
import { Bell } from './styles';
export const Notification = (props) => {
    const { setShow, status } = props;

    const { unread } = useContext(NotificationsContext);
    const activeStyles = () => classNames({
        active: status,
    });
    return (
        <Bell onClick={() => setShow(!status)} className={activeStyles()}>
            <div className="notification">
                {(unread > 0) ? (<>
                    <BellTwo />
                    <span className="notification--num">{unread}</span>
                </>) : <BellOne />}
            </div>
        </Bell>
    )
}