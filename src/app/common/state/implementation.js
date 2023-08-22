import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ImplementationContext = createContext({});

export const ImplementationProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [isLoading, setIsLoading] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [isDeleted, setIsDeleted] = useState(false);

    // Make the context object:
    const implementationContext = {
        isLoading,
        setIsLoading,
        isDisabled, 
        setIsDisabled,
        isDeleted,
        setIsDeleted
    };

    // pass the value in provider and return
    return <ImplementationContext.Provider value={implementationContext}>{children}</ImplementationContext.Provider>;
};


ImplementationProvider.propTypes = {
    isLoading: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isDeleted: PropTypes.bool,
};

ImplementationProvider.defaultProps = {
    isLoading: false,
    isDisabled: false,
    isDeleted: false,
};
