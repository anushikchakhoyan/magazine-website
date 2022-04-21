import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import App from './App';
import './styles/index.css';
import './I18n/config';

import i18next from "i18next";
import {I18nextProvider} from "react-i18next";

ReactDOM.render(
    <Router basename="/magazine-website">
        <I18nextProvider i18n={i18next}>
            <App/>
        </I18nextProvider>
    </Router>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();