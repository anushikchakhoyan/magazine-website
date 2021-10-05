import HttpClient from './client';

const RESOURCE_NAME = '/users';

export default {
    addUser(params) {
        return HttpClient.post(RESOURCE_NAME, params);
    },

    getUsers(params) {
        return HttpClient.get(RESOURCE_NAME, { params });
    },

    deleteUser(id) {
        return HttpClient.delete(`${RESOURCE_NAME}/${id}`);
    },

    editUser(id, params) {
        return HttpClient.patch(`${RESOURCE_NAME}/${id}`, params);
    }
};
