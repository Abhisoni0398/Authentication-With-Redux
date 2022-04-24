/* eslint-disable prettier/prettier */
export const API_BASE_URL = 'http://192.168.1.1/';

export const getApiUrl = endPoint => API_BASE_URL + endPoint;

export const LOGIN = getApiUrl('/login');
export const SIGNUP = getApiUrl('/signup');
