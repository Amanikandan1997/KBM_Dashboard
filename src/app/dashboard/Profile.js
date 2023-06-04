import React, { Component } from 'react';

export const fetchProfileDetails = () => {
    return dispatch => {
      fetch('http://127.0.0.1:8000/api/user_reg')
      .then(resp => resp.json())
      .then(profile => dispatch({type: 'FETCH_PROFILE', payload: profile}))
    }
  }
  