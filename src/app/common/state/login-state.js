import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const LoginContext = createContext({});

export const LoginProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [counter, setCounter] = useState(300);

    // Make the context object:
    const loginContext = {
        counter, setCounter,
    };

    // pass the value in provider and return
    return <LoginContext.Provider value={loginContext}>{children}</LoginContext.Provider>;
};

LoginProvider.propTypes = {
    counter: PropTypes.number,
};

LoginProvider.defaultProps = {
    counter: null,
};
