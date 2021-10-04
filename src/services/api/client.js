import axios from 'axios';
import {message} from "antd";
import { withRouter } from 'react-router';
import { get, isEmpty, includes } from 'lodash-es';

import { getToken, removeUser, removeToken } from '../../helpers/storage.helper';
import HttpStatusCode from '../../constants/statusCodes';
import I18n from '../../I18n/config';

const HttpClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

HttpClient.interceptors.request.use(
    config => {
        const token = getToken();

        if (!isEmpty(token)) {
            config.headers['Authorization'] = `Bearer ${token}`;
        }

        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

HttpClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        let msg;
        let statusCode = get(error, 'response.status', HttpStatusCode.INTERNAL_SERVER_ERROR);

        if (statusCode === HttpStatusCode.UNAUTHORIZED) {
            removeUser();
            removeToken();
            return (window.location.href = '/login');
        } else if (includes([HttpStatusCode.BAD_REQUEST, HttpStatusCode.FORBIDDEN], statusCode)) {
            msg = get(error, 'response.data.message');
        } else if (statusCode >= HttpStatusCode.INTERNAL_SERVER_ERROR) {
            msg = 'err_internal';
        }

        if (!isEmpty(msg)) {
            console.log(msg)
            message.error(I18n.t(`error.${msg}`));
        }

        return Promise.reject(error);
    }
);

export default withRouter(HttpClient);
