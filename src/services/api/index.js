import HttpClient from "./client";

export default {
    getNews(params) {
        return HttpClient.get('/news', { params });
    },

    getSingleNews(id) {
        return HttpClient.get(`/news/${id}`);
    },

    getSportNews(params) {
        return HttpClient.get('/sport', { params });
    },

    getTechnologies(params) {
        return HttpClient.get('/technologies', { params });
    },

    getFaqs(params) {
        return HttpClient.get('/faqs', { params });
    },

    getPrivacy(params) {
        return HttpClient.get('/privacy', { params });
    },

    getTerms(params) {
        return HttpClient.get('/privacy', { params });
    },

    getMarquee(params) {
        return HttpClient.get('/marquee', { params });
    },
}