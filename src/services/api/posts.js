import HttpClient from './client';

const RESOURCE_NAME = '/posts';

export default {
    addPost(params) {
        return HttpClient.post(RESOURCE_NAME, params);
    },

    getPosts(params) {
        return HttpClient.get(RESOURCE_NAME, { params });
    },

    deletePost(id) {
        return HttpClient.delete(`${RESOURCE_NAME}/${id}`);
    },

    editPost(id, params) {
        return HttpClient.patch(`${RESOURCE_NAME}/${id}`, params);
    }
};
