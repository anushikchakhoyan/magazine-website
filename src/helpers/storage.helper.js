import {isEmpty} from 'lodash-es';

const STORAGE_KEYS = {
    USER: 'user',
    TOKEN: 'token'
};

export function setUser(user) {
    localStorage.setItem(STORAGE_KEYS.USER, JSON.stringify(user));
}

export function getUser() {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.USER));
}

export function removeUser() {
    localStorage.removeItem(STORAGE_KEYS.USER);
}

export function setToken(token) {
    localStorage.setItem(STORAGE_KEYS.TOKEN, token);
}

export function getToken() {
    return localStorage.getItem(STORAGE_KEYS.TOKEN);
}

export function hasToken() {
    return !isEmpty(localStorage.getItem(STORAGE_KEYS.TOKEN));
}

export function removeToken() {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
}