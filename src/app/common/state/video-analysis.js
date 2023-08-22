import { createContext, useState, useEffect } from 'react';
import { find } from 'lodash';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getToken, getTokenX, getUser } from '../components/general/utils';
import { decrypt } from '../components/general/cypher';
import { withRouter } from '../helpers';

export const VideoAnalysisContext = createContext({});

export const VideoAnalysisProvider = withRouter(({ location, children }) => {

    // Use State to keep the values
    const [analysis, setAnalysis] = useState([]);
    const [userAnalytics, setUserAnalytics] = useState([]);
    const [error, setError] = useState(false);

    const { pathname } = useLocation();

    const { CancelToken } = axios;
    const source = CancelToken.source();

    const env = ((`${process.env.REACT_APP_ENV}` === 'production') || (`${process.env.REACT_APP_ENV}` === 'staging') || (`${process.env.REACT_APP_ENV}` === 'develop') || (`${process.env.REACT_APP_ENV}` === 'uat'));

    const api = axios.create({
        baseURL: (env) ? `${process.env.REACT_APP_API_URL_PROD}` : `${process.env.REACT_APP_API_URL_DEV}`,
        responseType: 'json',
        withCredentials: true,
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        cancelToken: source.token,
    });

    api.interceptors.request.use((config) => {
        const x = getToken();
        const token = (x) || getTokenX();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });

    const saveAnalytics = (data, user_id) => api.post('/api/v1/training-analytics/', { data, user_id })
        .then(res => {
            setAnalysis([]); // clear the local state list
            // Save all the analytics
            if (res.data.data) {
                setUserAnalytics(res.data.data);
            }
        }).catch(e => {
            if (axios.isCancel(e)) {
                setError(false);
                return;
            }
            console.error(e.message);
            setError(true);
        });

    const save = () => {
        if (analysis.length > 0) {
            const user = getUser();
            if (user) {
                const u = JSON.parse(atob(decrypt(process.env.REACT_APP_HASHING_SALT, user)));
                saveAnalytics(analysis, u.id);
            }
        }
    };

    useEffect(() => {
        let intervalID = 0;
        const status = (/\/dashboard\/onboarding/.test(pathname)) || (/\/dashboard\/training\/\w+/.test(pathname)) || (/\/dashboard\/coaching\/\w+/.test(pathname));
        // save the video analysis after every 5 sec when user is in the training or onboarding page
        // e.g (/dashboard/training/100ktraining) OR (/dashboard/training/software) OR (/dashboard/onboarding)
        if (status) {
            intervalID = setInterval(() => {
                save();
            }, 5000);
        } else {
            clearInterval(intervalID);
        }
        return () => { // clean up 
            clearInterval(intervalID);
            source.cancel();
        };
    }, [analysis, pathname]);

    const update = (item) => {
        if (analysis.length === 0) {
            setAnalysis([item]);
        } else {
            let index = null;
            const found = find(analysis, (each, i) => {
                index = i;
                return each.id === item.id;
            });
            if (found) {
                analysis[index] = { ...found, ...item };
                setAnalysis(analysis);
            } else {
                setAnalysis([...analysis, item]);
            }
        }
    };

    // Make the context object:
    const context = {
        analysis,
        setAnalysis,
        update,
        error,
        setError,
        userAnalytics,
        setUserAnalytics
    };

    // pass the value in provider and return
    return <VideoAnalysisContext.Provider value={context}>{children}</VideoAnalysisContext.Provider>;
});

VideoAnalysisProvider.propTypes = {
    analysis: PropTypes.array,
    userAnalytics: PropTypes.array,
};

VideoAnalysisProvider.defaultProps = {
    analysis: [],
    userAnalytics: [],
};