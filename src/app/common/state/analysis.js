import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const AnalysisContext = createContext({});

export const AnalysisProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [analysis, setAnalysis] = useState([]);
    const [selectedAnalysis, setSelectedAnalysis] = useState(null);
    const [trainingAnalytics, setTraininAnalytics] = useState([]);

    // Make the context object:
    const assessmentContext = {
        analysis,
        setAnalysis,
        selectedAnalysis,
        setSelectedAnalysis,
        trainingAnalytics,
        setTraininAnalytics,
    };

    // pass the value in provider and return
    return <AnalysisContext.Provider value={assessmentContext}>{children}</AnalysisContext.Provider>;
};

AnalysisProvider.propTypes = {
    analysis: PropTypes.array,
    selectedAnalysis: PropTypes.object,
    trainingAnalytics: PropTypes.array,
};

AnalysisProvider.defaultProps = {
    analysis: [],
    selectedAnalysis: null,
    trainingAnalytics: [],
};
