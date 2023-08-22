import { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import classNames from 'classnames';
import { Logo } from '../logo';
import { TOTAL_UNREAD_EMAILS } from '../../services/gql-queries';
import { TopMenu } from '../topmenu';
import { DashboardMenu } from '../dashmenu';
import { logout } from '../general/form-actions';
import { decrypt } from '../general/cypher';
import { useGraph } from '../../containers/coaching/messages/get-data';
import { EmailsContext, NotificationsContext } from '../../state';
import {
    ChromeWarningSection, ChromeWarningSpan, ChromeWarningButton,
    NotificationListItem
} from './styles';
import { Notification } from './notification';
import { useDB } from './data';

export const Header = (props) => {

    const { coach } = props;

    if (!coach) {
        // logout();
        return null;
    }

    useEffect(() => {

        try {
            const user_data = JSON.parse(window.atob(decrypt(process.env.REACT_APP_HASHING_SALT, localStorage.getItem('pas-user'))));
            const pas_token = localStorage.getItem('pas-token');
            if (user_data.pas_token != pas_token) {
                logout();
            }

        } catch (error) {
            logout();
        }

    }, []);

    const { data } = useGraph({ query: TOTAL_UNREAD_EMAILS, variables: { user_id: Number(coach && coach.id) || '' } });

    const { setUnread } = useContext(EmailsContext);
    const {
        setShow, show, showBrowserNotice, setShowBrowserNotice
    } = useContext(NotificationsContext);

    const { getNotificationAnalysis } = useDB({ user_id: coach && coach.id });

    useEffect(() => {
        if (coach) {
            getNotificationAnalysis({ user_id: coach && coach.id });
        }
    }, []);

    useEffect(() => {
        if (data && data.unreademails && coach) {
            setUnread(data.unreademails);
        }
    }, [data]);

    let isDigital = false;
    if (props.assessment) {
        const { module_set_name } = props.assessment;
        if (module_set_name.includes('Digital')) {
            isDigital = true;
        }
    }

    const activeStyle = {
        color: '#14143f'
    };

    const checkActive = (status) => status ? activeStyle : undefined;

    const settings = (props.isAdmin) ? (
        <li className="nav-item">
            <NavLink style={({ isActive }) => checkActive(isActive)} to="/dashboard/settings/users" className="nav-link"><i className="fa fa-cog" aria-hidden="true" /></NavLink>
        </li>
    ) : (props.isAdvisor) ? (
        <li className="nav-item">
            <NavLink style={({ isActive }) => checkActive(isActive)} to="/dashboard/settings/onboarding-analysis" className="nav-link"><i className="fa fa-cog" aria-hidden="true" /></NavLink>
        </li>
    ) : null;

    const { prospects_notify } = (props.coach) ? props.coach : false;

    const prospectsStyles = classNames({
        'nav-link': true,
        prospects: !!(prospects_notify),
    });

    const getBrowser = () => {
        if ((navigator.userAgent.indexOf('Opera') !== -1) || navigator.userAgent.indexOf(' OPR/') >= 0) {
            return 'Opera';
        } if (navigator.userAgent.indexOf('Edg') !== -1) {
            return 'Edge';
        } if (navigator.userAgent.indexOf('Chrome') !== -1) {
            return 'Chrome';
        } if (navigator.userAgent.indexOf('Safari') !== -1) {
            return 'Safari';
        } if (navigator.userAgent.indexOf('Firefox') !== -1) {
            return 'Firefox';
        } if ((navigator.userAgent.indexOf('MSIE') !== -1) || (!!document.documentMode === true)) {
            return 'IE';
        }
        return 'Unknown';
    };

    const hideWarning = () => {
        setShowBrowserNotice(false);
    };

    const notice = "Chrome Warning! The PAS will perform best on another browser. Please switch to Edge, Safari, or Firefox for the best experience.";

    return (
        <header>
            <nav className="navbar navbar-expand-md fixed-top">
                <a className="navbar-brand" href="/"><Logo das={isDigital} type="dark" /></a>


                <div className="navbar-collapse">

                    <ul className="navbar-nav mr-auto" />

                    <ul className="navbar-nav top-right-menu animate__animated animate__fadeIn">

                        <li className="nav-item">
                            <NavLink style={({ isActive }) => checkActive(isActive)} to="/dashboard" className="nav-link" end><i className="fa fa-home" aria-hidden="true" /></NavLink>
                        </li>

                        <NotificationListItem>
                            <Notification setShow={setShow} status={show} />
                        </NotificationListItem>

                        <li className="nav-item">
                            <NavLink style={({ isActive }) => checkActive(isActive)} to="/dashboard/help" className="nav-link"><i className="fa fa-life-ring" aria-hidden="true" /></NavLink>
                        </li>

                        {settings}

                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <i className="fa fa-user" aria-hidden="true" />
                            </DropdownToggle>
                            <DropdownMenu right>

                                <DropdownItem>
                                    <NavLink to="/dashboard/profile" className="nav-link profile-link">Profile</NavLink>
                                </DropdownItem>

                                <DropdownItem divider />
                                <DropdownItem onClick={() => logout()}>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>

                    </ul>

                </div>
            </nav>
            {((getBrowser() === "Chrome") && (showBrowserNotice === true)) ?
                <ChromeWarningSection>
                    <ChromeWarningSpan>{notice}</ChromeWarningSpan>
                    <ChromeWarningButton onClick={() => hideWarning()}><i className="fa fa-times" aria-hidden="true"></i></ChromeWarningButton>
                </ChromeWarningSection> : null}

            {(props.dashboard) ? <DashboardMenu coach={props.coach} /> : <TopMenu coach={props.coach} />}

        </header>
    );
};
