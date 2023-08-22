import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { NotificationsContext } from '../../state';
import { getToken, getTokenX, errorToast } from '../../components/general/utils';

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

    const { setUnread, setAnalysis, setNotifications, setUnreadNotices } = useContext(NotificationsContext);

    const toggleNotificationAnalysis = (data) => {
        return api.post('/api/v1/notifications/toggleanalysis/', data).then(response => {
            if (response.data.error) {
                errorToast(response.data.error, true, false);
            } else {
                const { unread_count, unread } = response.data.data;
                setUnread(unread_count);
                setUnreadNotices(unread);
                setAnalysis(response.data.data);
            }
        }).catch(e => {
            if (axios.isCancel(e)) {
                setError(false);
                return;
            }
            errorToast(e.message, true, false);
            setError(true);
        });
    };

    const toggleAll = (data, actions) => {
        const { setLoading } = actions;
        setLoading(true);
        return api.post('/api/v1/notifications/toggleall/', data).then(response => {
            if (response.data.error) {
                errorToast(response.data.error, true, false);
            } else {
                const { unread_count, unread } = response.data.data;
                setUnreadNotices(unread);
                setUnread(unread_count);
                setAnalysis(response.data.data);
            }
            setLoading(false);
        }).catch(e => {
            setLoading(false);
            if (axios.isCancel(e)) {
                setError(false);
                return;
            }

            errorToast(e.message, true, false);
            setError(true);
        });
    };


    const getNotifications = (actions) => {
        const { setLoading } = actions;
        setLoading(true);
        return api.get('/api/v1/notifications/').then(response => {
            if (response.data.error) {
                errorToast(response.data.error, true, false);
            } else {
                setNotifications(response.data.data);
            }
            setLoading(false);
        }).catch(e => {
            if (axios.isCancel(e)) {
                setError(false);
                return;
            }
            errorToast(e.message, true, false);
            setError(true);
            setLoading(false);
        });
    };


    useEffect(() => {
        setError(false);
        return () => { // clean up 
            source.cancel();
        };
    }, []);

    return {
        error, toggleNotificationAnalysis, getNotifications, toggleAll
    };
};


