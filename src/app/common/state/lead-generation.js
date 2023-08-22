import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const LeadGenerationContext = createContext({});

export const LeadGenerationProvider = (props) => {
  const { children } = props;

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
  const [steps, setSteps] = useState(null);
  const [scripts, setScripts] = useState(null);
  const [userScripts, setUserScripts] = useState(null);
  const [progress, setProgress] = useState([]);
  const [advisors, setAdvisors] = useState([]);
  const [users, setUsers] = useState([]);
  const [userList, setUserList] = useState([]);
  const [analysis, setAnalysis] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [recipient, setRecipient] = useState(null);
  const [showManagerModal, setShowManagerModal] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [showSurveyModal, setShowSurveyModal] = useState(false);
  const [showBusinessSurveyModal, setShowBusinessSurveyModal] = useState(false);
  const [showSurveyAnalytics, setShowSurveyAnalytics] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedSurvey, setSelectedSurvey] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  const [selectedCoach, setSelectedCoach] = useState(null);
  const [data, setData] = useState(null);
  const [filteredUser, setFilteredUser] = useState(null);
  const [query, setQuery] = useState("");
  const [keyword, setKeyword] = useState("");
  const [pageNumber, setPageNumber] = useState("");
  const [scriptUpdate, setScriptUpdate] = useState(true);
  const [page,setPage] = useState('')
  const [lessonAnalysis,setLessonAnalysis] = useState([]);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [showResource, setShowResource] = useState(false);
  const [selectedResource, setSelectedResource] = useState(null);
  const [videoAnalysis, setVideoAnalysis] = useState([]);
  const [videoProgress, setVideoProgress] = useState(0);

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
    advisors,
    setAdvisors,
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
    steps,
    setSteps,
    scripts,
    setScripts,
    userScripts,
    setUserScripts,
    progress,
    setProgress,
    users,
    setUsers,
    userList,
    setUserList,
    analysis,
    setAnalysis,
    lessons,
    setLessons,
    recipient,
    setRecipient,
    recipient,
    setRecipient,
    query,
    setQuery,
    keyword,
    setKeyword,
    pageNumber,
    setPageNumber,
    showSurveyAnalytics,
    setShowSurveyAnalytics,
    showManagerModal,
    setShowManagerModal,
    showEmailModal,
    setShowEmailModal,
    selectedCoach,
    setSelectedCoach,
    showNoteModal,
    setShowNoteModal,
    showDownloadModal,
    setShowDownloadModal,
    selectedNote,
    setSelectedNote,
    advisor,
    setAdvisor,
    showSurveyModal,
    setShowSurveyModal,
    showSurvey,
    setShowSurvey,
    selectedSurvey,
    setSelectedSurvey,
    filteredData,
    setFilteredData,
    data,
    setData,
    filteredUser,
    setFilteredUser,
    scriptUpdate,
    setScriptUpdate,
    page,
    setPage,
    lessonAnalysis,
    setLessonAnalysis,
    showResource,
    setShowResource,
    selectedResource,
    setSelectedResource,
    selectedLesson,
    setSelectedLesson,
    videoAnalysis,
    setVideoAnalysis,
    setVideoProgress
  };

  // pass the value in provider and return
  return (
    <LeadGenerationContext.Provider value={context}>
      {children}
    </LeadGenerationContext.Provider>
  );
};

LeadGenerationProvider.propTypes = {
  user: PropTypes.object,
  advisor: PropTypes.object,
  loading: PropTypes.bool,
  error: PropTypes.object,
  success: PropTypes.object,
  selectedStep: PropTypes.object,
  selectedVideo: PropTypes.object,
  loadedanalytics: PropTypes.object,
  showVideos: PropTypes.bool,
  processing: PropTypes.bool,
  steps: PropTypes.object,
  scripts: PropTypes.object,
  userScripts: PropTypes.object,
  progress: PropTypes.array,
  advisors: PropTypes.array,
  users: PropTypes.array,
  userList: PropTypes.array,
  analysis: PropTypes.object,
  lessons: PropTypes.object,
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
  filteredData: PropTypes.object,
  data: PropTypes.object,
  filteredUser: PropTypes.string,
  pageNumber: PropTypes.string,
  keyword: PropTypes.string,
  scriptUpdate: PropTypes.bool,
  page: PropTypes.string,
  lessonAnalysis: PropTypes.array,
  showResource: PropTypes.bool,
  selectedResource: PropTypes.object,
  selectedLesson: PropTypes.object,
  videoAnalysis: PropTypes.array,
  videoProgress: PropTypes.number
};

LeadGenerationProvider.defaultProps = {
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
  steps: null,
  scripts: null,
  userScripts: null,
  progress: [],
  advisors: [],
  users: [],
  userList: [],
  analysis: null,
  lessons: null,
  recipient: null,
  query: "",
  pageNumber: "",
  started: null,
  preparation: null,
  training: null,
  completion: null,
  selectedCoach: null,
  selectedNote: null,
  recipient: null,
  showSurveyModal: null,
  showSurvey: null,
  showBusinessSurveyModal: null,
  showSurveyAnalytics: null,
  filteredData: null,
  data: null,
  filteredUser: null,
  keyword: "",
  scriptUpdate: true,
  page:'',
  lessonAnalysis: [],
  showResource: false,
  selectedResource: null,
  selectedLesson: null,
  videoAnalysis: [],
  videoProgress: 0,
};
