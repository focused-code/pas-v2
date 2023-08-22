import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const OnboardingBusinessAnalysisContext = createContext({});

export const OnboardingBusinessAnalysisProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [user, setUser] = useState(null);
    const [advisors, setAdvisors] = useState([]);
    const [advisor, setAdvisor] = useState(null); // currently selected advisor
    const [analysis, setAnalysis] = useState([]);
    const [progress, setProgress] = useState([]);
    const [users, setUsers] = useState([]);
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);

    const [showcompleted, setShowCompleted] = useState(false);
    const [showCanceled, setShowCanceled] = useState(false);
    const [showOther, setShowOther] = useState(false);
    const [showCurrent, setShowCurrent] = useState(true);
    const [onboardingStatus, setOnboardingStatus] = useState(0);

    const [keyword, setKeyword] = useState('');
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState('');

    const [started, setStarted] = useState(null);
    const [selectedCoach, setSelectedCoach] = useState(null);
    const [selectedNote, setSelectedNote] = useState(null);
    const [recipient, setRecipient] = useState(null);

    const [showManagerModal, setShowManagerModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [showBusinessSurveyModal, setShowBusinessSurveyModal] = useState(false);

    useEffect(() => {
        if ((advisors.length > 0) && user !== null) {
            const found = advisors.find((i) => Number(i.user_id) === Number(user.id));
            setAdvisor(found);
        }
    }, [advisors, user])

    // Make the context object:
    const context = {
        user,
        setUser,
        advisors,
        setAdvisors,
        loading,
        setLoading,
        showcompleted,
        setShowCompleted,
        showCanceled, setShowCanceled,
        showOther, setShowOther,
        showCurrent, setShowCurrent,
        keyword, setKeyword,
        query, setQuery,
        pageNumber, setPageNumber,
        analysis, setAnalysis,
        progress, setProgress,
        users, setUsers,
        userList, setUserList,
        started, setStarted,
        showManagerModal, setShowManagerModal,
        showEmailModal, setShowEmailModal,
        selectedCoach, setSelectedCoach,
        showNoteModal, setShowNoteModal,
        selectedNote, setSelectedNote,
        recipient, setRecipient,
        advisor, setAdvisor,
        showBusinessSurveyModal, setShowBusinessSurveyModal,
        onboardingStatus, setOnboardingStatus,
    };

    // pass the value in provider and return
    return <OnboardingBusinessAnalysisContext.Provider value={context}>{children}</OnboardingBusinessAnalysisContext.Provider>;
};

OnboardingBusinessAnalysisProvider.propTypes = {
    user: PropTypes.object,
    advisor: PropTypes.object,
    advisors: PropTypes.array,
    progress: PropTypes.array,
    analysis: PropTypes.array,
    users: PropTypes.array,
    userList: PropTypes.array,
    loading: PropTypes.bool,
    showcompleted: PropTypes.bool,
    showCanceled: PropTypes.bool,
    showOther: PropTypes.bool,
    showCurrent: PropTypes.bool,
    showManagerModal: PropTypes.bool,
    showEmailModal: PropTypes.bool,
    showNoteModal: PropTypes.bool,
    keyword: PropTypes.string,
    query: PropTypes.string,
    pageNumber: PropTypes.string,
    started: PropTypes.object,
    selectedCoach: PropTypes.object,
    selectedNote: PropTypes.object,
    recipient: PropTypes.object,
    showBusinessSurveyModal: PropTypes.bool,
    onboardingStatus: PropTypes.number,
};

OnboardingBusinessAnalysisProvider.defaultProps = {
    user: null,
    advisor: null,
    advisors: [],
    progress: [],
    analysis: [],
    users: [],
    userList: [],
    loading: false,
    showcompleted: false,
    showCanceled: false,
    showOther: false,
    showCurrent: false,
    showManagerModal: false,
    showEmailModal: false,
    showNoteModal: false,
    keyword: '',
    query: '',
    pageNumber: '',
    started: null,
    selectedCoach: null,
    selectedNote: null,
    recipient: null,
    showBusinessSurveyModal: false,
    onboardingStatus: 0,
};
