import { useEffect, useState } from 'react';
import axios from 'axios';
import { getToken, getTokenX } from '../../components/general/utils';

export const useDB = () => {
    const [error, setError] = useState(false);

    const { CancelToken } = axios;
    const source = CancelToken.source();

    const env = ((`${process.env.REACT_APP_ENV}` === 'production') || (`${process.env.REACT_APP_ENV}` === 'staging') || (`${process.env.REACT_APP_ENV}` === 'develop') || (`${process.env.REACT_APP_ENV}` === 'uat'));

    const api = axios.create({
        baseURL: (env) ? `${process.env.REACT_APP_API_URL_PROD}` : `${process.env.REACT_APP_API_URL_DEV}`,
        responseType: 'json',
        headers: { 'X-Requested-With': 'XMLHttpRequest' },
        cancelToken: source.token,
    });

    api.interceptors.request.use((config) => {
        const x = getToken();
        const token = (x) || getTokenX();
        config.headers.Authorization = `Bearer ${token}`;
        return config;
    });

    const updateBusinessType = (details) => api.post(`/api/v1/companies/updatebusiness/`, details)

    const getResponses = (path, business) => api.get('/api/v1/ai/searchSuggestions/', {
        params: {
            topic: path,
            business: business,
        }
    });

    const saveResponsesHistory = (details) => api.post(`/api/v1/ai/history/responses/`, details)

    const getResponsesHistory = (user_id) => api.get('/api/v1/ai/history/responses/', {
        params: {
            user_id: user_id,
        }
    });

    const getQuestionsList = () => api.get('/api/v1/ai/listquestions/');

    const saveHowTosHistory = (details) => api.post(`/api/v1/ai/history/howtos/`, details)

    const getHowTosHistory = (user_id) => api.get('/api/v1/ai/history/howtos/', {
        params: {
            user_id: user_id,
        }
    });

    useEffect(() => {
        setError(false);
        return () => { // clean up 
            source.cancel();
        };
    }, []);

    return {
        error,
        getResponses,
        updateBusinessType,
        saveResponsesHistory,
        saveHowTosHistory,
        getResponsesHistory,
        getHowTosHistory,
        getQuestionsList 
    };
};


