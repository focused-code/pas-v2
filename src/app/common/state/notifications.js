import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const NotificationsContext = createContext({});

export const NotificationsProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [unread, setUnread] = useState(0);
    const [notifications, setNotifications] = useState([]);
    const [unreadNotices, setUnreadNotices] = useState([]);
    const [analysis, setAnalysis] = useState(null);
    const [show, setShow] = useState(false);
    const [showBrowserNotice, setShowBrowserNotice] = useState(true);
    const [menucollapse, setMenucollapse] = useState(true);

    // Make the context object:
    const context = {
        unread,
        setUnread,
        notifications,
        setNotifications,
        show,
        setShow,
        analysis,
        setAnalysis,
        unreadNotices,
        setUnreadNotices,
        showBrowserNotice, 
        setShowBrowserNotice,
        menucollapse, setMenucollapse,
    };

    // pass the value in provider and return
    return <NotificationsContext.Provider value={context}>{children}</NotificationsContext.Provider>;
};


NotificationsProvider.propTypes = {
    unread: PropTypes.number,
    unreadNotices: PropTypes.array,
    notifications: PropTypes.array,
    show: PropTypes.bool,
    analysis: PropTypes.object,
    showBrowserNotice: PropTypes.bool,
    menucollapse: PropTypes.bool
};

NotificationsProvider.defaultProps = {
    unread: 0,
    notifications: [],
    unreadNotices: [],
    show: false,
    analysis: null,
    showBrowserNotice: true,
    menucollapse: true,
};
