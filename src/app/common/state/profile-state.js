import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ProfileContext = createContext({});

export const ProfileProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [phoneNumberError, setPhoneNumberError] = useState(null);

    // Make the context object:
    const profileContext = {
        phoneNumberError, 
        setPhoneNumberError
    };

    // pass the value in provider and return
    return <ProfileContext.Provider value={profileContext}>{children}</ProfileContext.Provider>;
};

ProfileProvider.propTypes = {
    phoneNumberError: PropTypes.string,
};

ProfileProvider.defaultProps = {
    phoneNumberError: null,
};
