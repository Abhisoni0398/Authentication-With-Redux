/* eslint-disable prettier/prettier */
import {apiPost} from '../../utils/utils';
import {LOGIN, SIGNUP} from '../../config/urls';

export function login(data) {
  return apiPost(LOGIN, data);
}

export function signup(data) {
  return apiPost(SIGNUP, data);
}
