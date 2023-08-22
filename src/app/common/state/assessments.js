import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AssessmentContext = createContext({});

export const AssessmentProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [selectedAssessment, setSelectedAssessment] = useState(null);

    // Make the context object:
    const assessmentContext = {
        selectedAssessment,
        setSelectedAssessment,
    };

    // pass the value in provider and return
    return <AssessmentContext.Provider value={assessmentContext}>{children}</AssessmentContext.Provider>;
};

// export const { Consumer } = AssessmentContext;

AssessmentProvider.propTypes = {
    selectedAssessment: PropTypes.object,
};

AssessmentProvider.defaultProps = {
    selectedAssessment: null,
};
