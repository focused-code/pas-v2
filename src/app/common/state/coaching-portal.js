import { createContext, useState, useEffect } from 'react';
import { filter } from 'lodash';
import moment from 'moment';
import PropTypes from 'prop-types';
import { encrypt } from '../components/general/cypher';

export const CoachingPortalContext = createContext({});

export const CoachingPortalProvider = (props) => {
    const {
        children,
    } = props;

    // Use State to keep the values
    const [user, setUser] = useState(null);
    const [showcommitment, setShowCommitment] = useState(false);
    const [commitmentfiles, setCommitmentFiles] = useState(null);
    const [client, setClient] = useState(null);
    const [trainings, setTrainings] = useState([]);
    const [companies, setCompanies] = useState([]);
    const [allassessments, setAllAssessments] = useState([]);
    const [clientassessments, setClientAssessments] = useState([]);
    const [currencies, setCurrencies] = useState([]);
    const [files, setFiles] = useState([]);
    const [currency, setCurrency] = useState(null);
    const [assessment, setAssessment] = useState(null);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const [showspinner, setShowSpinner] = useState(false);
    const [loadingnotes, setLoadingNotes] = useState(false);
    const [loading, setLoading] = useState(false);
    const [implementationlist, setImplementationList] = useState([]);
    const [assessmentanalysis, setAssessmentAnalysis] = useState(null);
    const [focus, setFocus] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [showFile, setShowFile] = useState(false);
    const [coaching, setCoaching] = useState(false);
    const [history, setHistory] = useState([]);
    const [nextmeetingdate, setNextMeetingDate] = useState('');
    const [editnextmeetingdate, setEditNextMeetingDate] = useState('');
    const [notes, setNotes] = useState([]);
    const [settings, setSettings] = useState([]);
    const [metrics, setMetrics] = useState([]);
    const [steps, setSteps] = useState([]);

    const [previous, setPrevious] = useState(null);
    const [closing, setClosing] = useState(false);
    const [deleting, setDeleting] = useState(false);
    const [editing, setEditing] = useState(false);
    const [selected, setSelected] = useState(null);
    const [current, setCurrent] = useState(null);
    const [processing, setProcessing] = useState(false);
    const [selectedTraining, setSelectedTraining] = useState(null);
    const [showTraining, setShowTraining] = useState(false);

    const [keyword, setKeyword] = useState('');
    const [query, setQuery] = useState('');
    const [pageNumber, setPageNumber] = useState('');
    const [appointments, setAppointments] = useState([]);
    const [appointment, setAppointment] = useState(null);
    const [editappointment, setEditAppointment] = useState(false);
    const [globalmeetinglinkstatus, setGlobalMeetingLinkStatus] = useState(false);
    const [meetinglink, setMeetingLink] = useState('');
    const [editglobalmeetinglinkstatus, setEditGlobalMeetingLinkStatus] = useState(false);
    const [editmeetinglink, setEditMeetingLink] = useState('');
    const [meetingDate, setMeetingDate] = useState(null);
    const [editMeetingDate, setEditMeetingDate] = useState(false);

    // for meeting date change
    const [status, setStatus] = useState(false);
    const [previousStatus, setPreviousStatus] = useState(false);
    const [previousHistoryStatus, setPreviousHistoryStatus] = useState(false);
    const [defaultDate, setDefaultDate] = useState(null);
    const [defaultPreviousDate, setDefaultPreviousDate] = useState(null);
    const [updatedPreviousDate, setUpdatedPreviousDate] = useState(null);

    // moment
    const today = moment();

    // if a client changes, make sure to pick their assessments
    // allassessments is the current coache's list of assessments
    useEffect(() => {
        if (client) {
            const filtered = filter(allassessments, (e) => e.company_id === client.id);
            setClientAssessments(filtered);
        }
    }, [allassessments, client]);

    // If a client changes, reset files, notes, tasks, next-meeting-date and settings
    const resetClientDetails = () => {
        setFiles([]);
        setNotes([]);
        setCurrent(null);
        setAssessment(null);
        setSettings([]);
        localStorage.removeItem('pas-coaching-note');
        localStorage.removeItem('pas-coaching-edit-note');
        localStorage.removeItem('pas-coaching-metrics');
        localStorage.removeItem('pas-coaching-edit-metrics');
        setNextMeetingDate('');
        setEditNextMeetingDate('');
        setGlobalMeetingLinkStatus(false);
        setMeetingLink('');
        setEditGlobalMeetingLinkStatus(false);
        setEditMeetingLink('');
        setClosing(false);
    };

    // if assement changes, pick its currecy
    // if we dont have an asessment picked setFocus of the day to null
    useEffect(() => {
        if (assessment) {
            const found = currencies.find((e) => e.id === assessment.currency_id);
            if (found) {
                setCurrency(found);
            }
        }
    }, [currencies, assessment]);

    // By default always pick the first item in implementationlist as the focus of the ay
    useEffect(() => {
        if (implementationlist.length > 0) {
            setFocus(implementationlist[0]);
        } else {
            setFocus(null);
        }
    }, [implementationlist]);

    // notes will always have at most 2 items. 
    // the second item is the previous note
    // if both the first and second have been closed, set the previous to be the first else the second
    // if the first item is not closed, then its the current active note
    useEffect(() => {
        if (notes.length) {

            // Set previous note
            if (notes[1]) {
                if (notes[0].closed && notes[1].closed) {
                    setPrevious(notes[0]);
                } else {
                    setPrevious(notes[1]);
                }
            } else if (notes[0] && notes[0].closed) {
                setPrevious(notes[0]);
            }

            // Set the current tasks
            if (notes[0].closed === 0) {
                // setTasks(notes[0].tasks);
                // Set next meeting
                const str = moment(notes[0].next_meeting_time).format('YYYY-MM-DD HH:mm:ss');
                setNextMeetingDate(str);
                setCurrent(notes[0]);
            } else {
                // setTasks([]);
                setCurrent(null);
                setNextMeetingDate('');
                setEditNextMeetingDate('');
            }

        } else {
            setCurrent(null);
            // setTasks([]);
            setPrevious(null);
            setNextMeetingDate('');
            setEditNextMeetingDate('');
        }
    }, [notes]);

    useEffect(() => {
        const local = localStorage.getItem('pas-coaching-metrics');
        if (local) {
            setCoaching(true);
        } else if (notes.length) {
            // Set coaching status
            if (notes[0].coaching === 0 || (notes[0].closed === 1)) {
                setCoaching(false);
            } else {
                setCoaching(true);
            }
        }
    }, [notes]);

    useEffect(() => {
        if (current || user) {
            if (current && current.meeting_url.length) {
                setMeetingLink(current.meeting_url);
            } else if (user && user.meeting_url && user.meeting_url.length) {
                setMeetingLink(user.meeting_url);
            }
        }
    }, [current, user]);

    useEffect(() => {
        if (selected || user) {
            if (selected && selected.meeting_url.length) {
                setEditMeetingLink(selected.meeting_url);
            } else if (user && user.meeting_url && user.meeting_url.length) {
                setEditMeetingLink(user.meeting_url);
            }
        }
    }, [selected, user]);

    useEffect(() => {
        if (editglobalmeetinglinkstatus) {
            const temp = { ...user, meeting_url: editmeetinglink }
            setUser(temp);
            localStorage.setItem('pas-user', encrypt(window.btoa(JSON.stringify(temp)), process.env.REACT_APP_HASHING_SALT));
        }
    }, [editglobalmeetinglinkstatus]);

    useEffect(() => {
        if (globalmeetinglinkstatus) {
            const temp = { ...user, meeting_url: meetinglink }
            setUser(temp);
            localStorage.setItem('pas-user', encrypt(window.btoa(JSON.stringify(temp)), process.env.REACT_APP_HASHING_SALT));
        }
    }, [globalmeetinglinkstatus]);

    // set the meeting Date
    useEffect(() => {
        setMeetingDate(today.format('MMMM Do, YYYY'));
    }, [selected]);

    const closeEditing = () => {
        setEditing(false);
        setTimeout(() => {
            setSelected(null);
        }, 500);
    };

    const closeAppointment = () => {
        setEditAppointment(false);
        setTimeout(() => {
            setAppointment(null);
        }, 500);
    };

    // Make the context object:
    const context = {
        user,
        setUser,
        client,
        setClient,
        notes,
        setNotes,
        previous,
        setPrevious,
        assessment,
        setAssessment,
        globalmeetinglinkstatus,
        setGlobalMeetingLinkStatus,
        meetinglink,
        setMeetingLink,

        editglobalmeetinglinkstatus,
        setEditGlobalMeetingLinkStatus,
        editmeetinglink,
        setEditMeetingLink,

        clientassessments,
        setClientAssessments,
        allassessments,
        setAllAssessments,
        showspinner,
        setShowSpinner,
        companies,
        setCompanies,
        currencies,
        setCurrencies,
        error,
        setError,
        success,
        setSuccess,
        implementationlist,
        setImplementationList,
        assessmentanalysis,
        setAssessmentAnalysis,
        loading,
        setLoading,
        currency,
        setCurrency,
        focus,
        setFocus,
        history,
        setHistory,
        files,
        setFiles,
        selectedFile,
        setSelectedFile,
        selectedTraining,
        setSelectedTraining,
        showFile,
        setShowFile,
        showTraining,
        setShowTraining,
        coaching,
        setCoaching,
        settings,
        setSettings,
        nextmeetingdate,
        setNextMeetingDate,
        editnextmeetingdate,
        setEditNextMeetingDate,
        closing,
        setClosing,
        loadingnotes,
        setLoadingNotes,
        deleting,
        setDeleting,
        editing,
        setEditing,
        selected,
        setSelected,
        current,
        setCurrent,
        processing,
        setProcessing,
        closeEditing,
        resetClientDetails,
        showcommitment,
        setShowCommitment,
        commitmentfiles,
        setCommitmentFiles,
        trainings,
        setTrainings,
        closeAppointment,
        appointments, setAppointments,
        appointment, setAppointment,
        editappointment, setEditAppointment,
        keyword, setKeyword,
        query, setQuery,
        pageNumber, setPageNumber,
        metrics, setMetrics,
        steps, setSteps,
        meetingDate, 
        setMeetingDate,
        editMeetingDate, 
        setEditMeetingDate,
        status, 
        setStatus,
        defaultDate, 
        setDefaultDate,
        defaultPreviousDate, 
        setDefaultPreviousDate,
        previousStatus, 
        setPreviousStatus,
        updatedPreviousDate, 
        setUpdatedPreviousDate,

        previousHistoryStatus, 
        setPreviousHistoryStatus
    };

    // pass the value in provider and return
    return <CoachingPortalContext.Provider value={context}>{children}</CoachingPortalContext.Provider>;
};

CoachingPortalProvider.propTypes = {
    user: PropTypes.object,
    client: PropTypes.object,
    globalmeetinglinkstatus: PropTypes.bool,
    editglobalmeetinglinkstatus: PropTypes.bool,
    meetinglink: PropTypes.string,
    editmeetinglink: PropTypes.string,
    companies: PropTypes.array,
    metrics: PropTypes.array,
    steps: PropTypes.array,
    clientassessments: PropTypes.array,
    allassessments: PropTypes.array,
    currencies: PropTypes.array,
    assessment: PropTypes.object,
    showspinner: PropTypes.bool,
    loading: PropTypes.bool,
    error: PropTypes.object,
    success: PropTypes.object,
    files: PropTypes.array,
    trainings: PropTypes.array,
    history: PropTypes.array,
    implementationlist: PropTypes.array,
    assessmentanalysis: PropTypes.object,
    focus: PropTypes.object,
    selectedFile: PropTypes.object,
    selectedTraining: PropTypes.object,
    showFile: PropTypes.bool,
    showTraining: PropTypes.bool,
    coaching: PropTypes.bool,
    nextmeetingdate: PropTypes.string,
    editnextmeetingdate: PropTypes.string,
    notes: PropTypes.array,
    settings: PropTypes.array,
    appointments: PropTypes.array,
    appointment: PropTypes.object,
    editappointment: PropTypes.bool,
    previous: PropTypes.object,
    closing: PropTypes.bool,
    loadingnotes: PropTypes.bool,
    deleting: PropTypes.bool,
    editing: PropTypes.bool,
    selected: PropTypes.object,
    current: PropTypes.object,
    processing: PropTypes.bool,
    showcommitment: PropTypes.bool,
    commitmentfiles: PropTypes.object,
    keyword: PropTypes.string,
    query: PropTypes.string,
    pageNumber: PropTypes.string,
    meetingDate: PropTypes.string, 
    editMeetingDate: PropTypes.bool,
    status: PropTypes.bool, 
    defaultDate: PropTypes.object,
    previousStatus: PropTypes.bool,
    defaultPreviousDate: PropTypes.object,
    updatedPreviousDate: PropTypes.object,
    previousHistoryStatus: PropTypes.bool,
};

CoachingPortalProvider.defaultProps = {
    user: null,
    showcommitment: false,
    commitmentfiles: null,
    client: null,
    companies: [],
    appointments: [],
    appointment: null,
    editappointment: false,
    clientassessments: [],
    allassessments: [],
    currencies: [],
    history: [],
    assessment: null,
    loading: false,
    showspinner: false,
    error: null,
    success: null,
    files: [],
    implementationlist: [],
    trainings: [],
    assessmentanalysis: null,
    focus: null,
    selectedFile: null,
    selectedTraining: null,
    showFile: false,
    showTraining: false,
    coaching: false,
    nextmeetingdate: '',
    editnextmeetingdate: '',
    notes: [],
    settings: [],
    previous: null,
    closing: false,
    loadingnotes: false,
    deleting: false,
    editing: false,
    selected: null,
    current: null,
    processing: false,
    keyword: '',
    query: '',
    pageNumber: '',
    globalmeetinglinkstatus: false,
    editglobalmeetinglinkstatus: false,
    meetinglink: '',
    editmeetinglink: '',
    meetingDate: null, 
    editMeetingDate: false,
    status: false, 
    defaultDate: null,
    previousStatus: false,
    defaultPreviousDate: null,
    updatedPreviousDate: null,
    previousHistoryStatus: false,
};
