import axios from 'axios';
import CommentModel from '../models/CommentModel'

const API_URL = '/api/comments';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';

export const fetchComments = () => {
  return async (dispatch) => {
    dispatch( fetchCommentsRequest() );
    try{
      const response = await axios.get(API_URL);
      const body = response.data.body;
      const data = CommentModel.createCommentInstance(body);
      dispatch( fetchCommentsSuccess(data) );
    } catch (error) {
      dispatch( fetchCommentsFailure(error) )
    };
  };
};

const fetchCommentsRequest = () => {
  return {
    type: FETCH_COMMENTS_REQUEST
  }
};

const fetchCommentsSuccess = (data) => {
  return {
    type: FETCH_COMMENTS_SUCCESS,
    data
  }
};

const fetchCommentsFailure = (error) => {
  return {
    type: FETCH_COMMENTS_FAILURE,
    error
  }
};