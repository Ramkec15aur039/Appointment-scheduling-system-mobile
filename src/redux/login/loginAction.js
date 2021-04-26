import React, {useState} from 'react';
import {
  POST_USERS_REQUEST,
  POST_USERS_SUCCESS,
  POST_USERS_FAILURE,
} from './loginTypes';
import axios from 'axios';
import {URL_CONSTANTS} from '../../api/url';
import {hostConfig} from '../../config';
import {responseStatusHandler, errorHandler} from '../../api/errorHandlers';

export const PostUsersRequest = () => {
  return {
    type: POST_USERS_REQUEST,
  };
};
export const PostUsersSuccess = users => {
  return {
    type: POST_USERS_SUCCESS,
    payload: users,
  };
};
export const PostUsersFailure = error => {
  return {
    type: POST_USERS_FAILURE,
    payload: error,
  };
};

export const PostUsers = data => {
    console.log("Request URL", URL_CONSTANTS.login);
  return function (dispatch) {
    console.log('Test...');
    dispatch(PostUsersRequest());
    axios
      .post(`${hostConfig.API_URL}${URL_CONSTANTS.login}`, data)
      .then(res => {
        console.log('Response from .then->', res);
        dispatch(PostUsersSuccess("success"));
      })
      .catch(error => {
        console.log('Error from .catch->', error);
        dispatch(PostUsersFailure("error"));
      });
  };
};
