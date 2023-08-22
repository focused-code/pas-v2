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

    const searchAi = (question, userid) => api.post('/api/v1/ai/liveSearch/', { question, userid });

    useEffect(() => {
        setError(false);
        return () => { // clean up 
            source.cancel();
        };
    }, []);

    return {
        error, searchAi
    };
};


