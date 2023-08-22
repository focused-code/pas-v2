import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { NotificationsContext } from '../../state';
import { getToken, getTokenX, errorToast } from '../../components/general/utils';
import properties from '../../services/properties';
import { logout } from '../../components/general/form-actions';


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

    api.interceptors.response.use(undefined, function (error) {
        const status = error.response && error.response.status;
        if (status) {
            switch (status) {
                case 401: // Not logged in
                case 419: { // Session expired
                    // case 503: // Down for maintenance
                    // Bounce the user to the login screen with a redirect back
                    properties.setError({ message: 'Your session Expired. Log in to continue using PAS.' });
                    logout();
                    window.location.reload(true);
                    break;
                }
                case 500:
                    console.log('Ooops, something went wrong!.');
                    break;
                default:
                    // Allow individual requests to handle other errors
                    return Promise.reject(error);
            }
        } else {
            return Promise.reject(error);
        }
    });

    const { setUnread, setUnreadNotices, setAnalysis } = useContext(NotificationsContext);

    const getNotificationAnalysis = (data) => {
        if (data.user_id) {
            return api.post('/api/v1/notifications/analysis/', data).then(response => {
                if (response && response.data) {
                    if (response.data.error) {
                        errorToast(response.data.error, true, false);
                    } else {
                        const { unread_count, unread } = response.data.data;
                        setUnread(unread_count);
                        setUnreadNotices(unread);
                        setAnalysis(response.data.data);
                    }
                }
            }).catch(e => {
                if (axios.isCancel(e)) {
                    setError(false);
                    return;
                }
                errorToast(e.message, true, false);
                setError(true);
            });
        }
    };


    useEffect(() => {
        setError(false);
        return () => { // clean up 
            source.cancel();
        };
    }, []);

    return {
        error, getNotificationAnalysis,
    };
};


