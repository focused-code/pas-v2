import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const CoachingContext = createContext({});

export const CoachingProvider = (props) => {
    const {
        children,
    } = props;

    const data = {
        label: '',
        value: 0,
        meeting_day: '',
        meeting_time: '',
        time_zone: { label: '', value: 0 },
        meeting_url: '',
    };

    // Use State to keep the values
    const [addmembers, setAddMembers] = useState(false);
    const [pickedTemplate, setPickedTemplate] = useState(data);

    // Make the context object:
    const context = {
        addmembers,
        setAddMembers,
        pickedTemplate,
        setPickedTemplate,
    };

    // pass the value in provider and return
    return <CoachingContext.Provider value={context}>{children}</CoachingContext.Provider>;
};


CoachingProvider.propTypes = {
    addmembers: PropTypes.bool,
};

CoachingProvider.defaultProps = {
    addmembers: false,
};
