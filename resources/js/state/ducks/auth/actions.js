import * as types from './types';

/**
 * creates a auth request action
 *
 * @param {string} method method for url (POST, GET, DELETE, UPDATE)
 * @param { string} url the url for the request
 * @param { string} operation the operation being conducted.  Either Login or Logout
 * @param history
 * @param { { name: string, password: string} } payload The paylaod of in the form of { user, token}
 */

export const authRequest = (method, url, operation, history, payload = {}) => {
  return {
    type: types.AUTH_REQUEST,
    payload,
    meta: {
      url,
      method,
      operation,
      history
    }
  };
};

export const authLoad = () => {
  return {
    type: types.AUTH_LOAD
  };
};

export const authLogin = user => {
  return {
    type: types.AUTH_LOGIN,
    payload: user
  };
};

export const authLogout = () => {
  return {
    type: types.AUTH_LOGOUT
  };
};

export const authError = () => {
  return {
    type: types.AUTH_ERROR
  };
};
