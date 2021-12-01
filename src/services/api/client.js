import axios from 'axios';
import { withRouter } from 'react-router';

const HttpClient = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
});

export default withRouter(HttpClient);
