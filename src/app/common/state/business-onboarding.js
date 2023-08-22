import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const BusinessOnboardingContext = createContext({});

export const BusinessOnboardingProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [user, setUser] = useState(null);
    const [advisor, setAdvisor] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [selectedStep, setSelectedStep] = useState(null);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showVideos, setShowVideos] = useState(false);
    const [showSurvey, setShowSurvey] = useState(false);
    const [loadedanalytics, setLoadedAnalytics] = useState(null);

    // Make the context object:
    const context = {
        user,
        setUser,
        error,
        setError,
        success,
        setSuccess,
        loading,
        setLoading,
        processing,
        setProcessing,
        advisor,
        setAdvisor,
        selectedStep,
        setSelectedStep,
        showVideos,
        setShowVideos,
        selectedVideo,
        setSelectedVideo,
        showSurvey,
        setShowSurvey,
        loadedanalytics,
        setLoadedAnalytics
    };

    // pass the value in provider and return
    return <BusinessOnboardingContext.Provider value={context}>{children}</BusinessOnboardingContext.Provider>;
};

BusinessOnboardingProvider.propTypes = {
    user: PropTypes.object,
    advisor: PropTypes.object,
    loading: PropTypes.bool,
    error: PropTypes.object,
    success: PropTypes.object,
    selectedStep: PropTypes.object,
    selectedVideo: PropTypes.object,
    loadedanalytics: PropTypes.object,
    showVideos: PropTypes.bool,
    showSurvey: PropTypes.bool,
    processing: PropTypes.bool,
};

BusinessOnboardingProvider.defaultProps = {
    user: null,
    advisor: null,
    loading: false,
    error: null,
    success: null,
    selectedStep: null,
    selectedVideo: null,
    loadedanalytics: null,
    showVideos: false,
    showSurvey: false,
    processing: false,
};
