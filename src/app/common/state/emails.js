import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const EmailsContext = createContext({});

export const EmailsProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [unread, setUnread] = useState(0);

    // Make the context object:
    const context = {
        unread,
        setUnread,
    };

    // pass the value in provider and return
    return <EmailsContext.Provider value={context}>{children}</EmailsContext.Provider>;
};


EmailsProvider.propTypes = {
    unread: PropTypes.number,
};

EmailsProvider.defaultProps = {
    unread: 0,
};
