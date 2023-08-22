import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const OnboardingAnalysisContext = createContext({});

export const OnboardingAnalysisProvider = (props) => {
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
    const [surveys, setSurveys] = useState([]);
    const [userList, setUserList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const [filteredData,setFilteredData] = useState([])
    const [selectedSurvey, setSelectedSurvey] = useState(null);

    const [showcompleted, setShowCompleted] = useState(false);
    const [showCanceled, setShowCanceled] = useState(false);
    const [showOther, setShowOther] = useState(false);
    const [showCurrent, setShowCurrent] = useState(true);
    const [onboardingStatus, setOnboardingStatus] = useState({ value: 0, label: 'Current' });

    const [keyword, setKeyword] = useState('');
    const [filteredUser, setFilteredUser] = useState('')
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState('');

    const [started, setStarted] = useState(null);
    const [preparation, setPreparation] = useState(null);
    const [training, setTraining] = useState(null);
    const [completion, setCompletion] = useState(null);
    const [selectedCoach, setSelectedCoach] = useState(null);
    const [selectedNote, setSelectedNote] = useState(null);
    const [recipient, setRecipient] = useState(null);

    const [showManagerModal, setShowManagerModal] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [showNoteModal, setShowNoteModal] = useState(false);
    const [showSurveyModal, setShowSurveyModal] = useState(false);
    const [showSurvey, setShowSurvey] = useState(false);
    const [showBusinessSurveyModal, setShowBusinessSurveyModal] = useState(false);
    const [showSurveyAnalytics, setShowSurveyAnalytics] = useState(false);
    const [data, setData] = useState(null)
    const [surveyType,setSurveyType] = useState(null)

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
        surveys, setSurveys,
        userList, setUserList,
        started, setStarted,
        preparation, setPreparation,
        training, setTraining,
        completion, setCompletion,
        showManagerModal, setShowManagerModal,
        showEmailModal, setShowEmailModal,
        selectedCoach, setSelectedCoach,
        showNoteModal, setShowNoteModal,
        showDownloadModal, setShowDownloadModal,
        selectedNote, setSelectedNote,
        recipient, setRecipient,
        advisor, setAdvisor,
        showSurveyModal, setShowSurveyModal,
        showSurvey, setShowSurvey,
        showBusinessSurveyModal, setShowBusinessSurveyModal,
        showSurveyAnalytics, setShowSurveyAnalytics,
        onboardingStatus, setOnboardingStatus,
        selectedSurvey, setSelectedSurvey,
        filteredData,setFilteredData,
        data, setData,
        filteredUser,setFilteredUser,
        surveyType,setSurveyType
    };

    // pass the value in provider and return
    return <OnboardingAnalysisContext.Provider value={context}>{children}</OnboardingAnalysisContext.Provider>;
};

OnboardingAnalysisProvider.propTypes = {
    user: PropTypes.object,
    advisor: PropTypes.object,
    advisors: PropTypes.array,
    progress: PropTypes.array,
    analysis: PropTypes.array,
    users: PropTypes.array,
    surveys: PropTypes.array,
    userList: PropTypes.array,
    loading: PropTypes.bool,
    showcompleted: PropTypes.bool,
    showCanceled: PropTypes.bool,
    showOther: PropTypes.bool,
    showCurrent: PropTypes.bool,
    showManagerModal: PropTypes.bool,
    showEmailModal: PropTypes.bool,
    showNoteModal: PropTypes.bool,
    showDownloadModal: PropTypes.bool,
    keyword: PropTypes.string,
    query: PropTypes.string,
    pageNumber: PropTypes.string,
    started: PropTypes.object,
    preparation: PropTypes.object,
    training: PropTypes.object,
    completion: PropTypes.object,
    selectedCoach: PropTypes.object,
    selectedNote: PropTypes.object,
    recipient: PropTypes.object,
    showSurveyModal: PropTypes.bool,
    showSurvey: PropTypes.bool,
    showBusinessSurveyModal: PropTypes.bool,
    showSurveyAnalytics: PropTypes.bool,
    onboardingStatus: PropTypes.object,
    filteredData: PropTypes.object,
    data: PropTypes.object,
    filteredUser: PropTypes.string,
    surveyType: PropTypes.string
};

OnboardingAnalysisProvider.defaultProps = {
    user: null,
    advisor: null,
    advisors: [],
    progress: [],
    analysis: [],
    users: [],
    surveys: [],
    userList: [],
    loading: false,
    showcompleted: false,
    showCanceled: false,
    showOther: false,
    showCurrent: false,
    showManagerModal: false,
    showEmailModal: false,
    showNoteModal: false,
    showDownloadModal: false,
    keyword: '',
    query: '',
    pageNumber: '',
    started: null,
    preparation: null,
    training: null,
    completion: null,
    selectedCoach: null,
    selectedNote: null,
    recipient: null,
    showSurveyModal: false,
    showSurvey: false,
    showBusinessSurveyModal: false,
    showSurveyAnalytics: false,
    onboardingStatus: { value: 0, label: 'Current' },
    filteredData: null,
    data:null,
    filteredUser: null,
    surveyType: null
};
