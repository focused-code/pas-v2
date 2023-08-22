import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const OnboardingContext = createContext({});

export const OnboardingProvider = (props) => {
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
    const [showDocs, setShowDocs] = useState(false);
    const [showSurvey, setShowSurvey] = useState(false);
    const [loadedanalytics, setLoadedAnalytics] = useState(null);
    const [percentComplete, setpercentComplete] = useState(0);
    const [percentCompleteBySection, setpercentCompleteBySection] = useState({});
    const [onboardingInstructions, setonboardingInstructions] = useState('Building, supporting and retaining your team of skilled Business Coaches will serve you for many years to come.');
    const [defaultTab, setDefaultTab] = useState('1');
    const [showEmailModal, setShowEmailModal] = useState(false);


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
        setLoadedAnalytics,
        percentComplete,
        setpercentComplete,
        percentCompleteBySection,
        setpercentCompleteBySection,
        onboardingInstructions,
        setonboardingInstructions,
        defaultTab,
        setDefaultTab,
        showDocs, setShowDocs,
        showEmailModal, setShowEmailModal,
    };

    // pass the value in provider and return
    return <OnboardingContext.Provider value={context}>{children}</OnboardingContext.Provider>;
};

OnboardingProvider.propTypes = {
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
    percentComplete: PropTypes.number,
    percentCompleteBySection: PropTypes.object,
    onboardingInstructions: PropTypes.string,
    defaultTab: PropTypes.string,
    showDocs: PropTypes.bool,
    showEmailModal: PropTypes.bool,
};

OnboardingProvider.defaultProps = {
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
    percentComplete: 0,
    percentCompleteBySection: {},
    onboardingInstructions: '',
    defaultTab: '1',
    showDocs: false,
    showEmailModal: false,
};
