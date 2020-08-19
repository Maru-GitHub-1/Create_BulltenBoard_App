import {
  FETCH_COMMENTS_REQUEST,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from '../actions/fetchComments';

const initialState = {
  isLoading: false,
  comments: [],
  error: null_
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENTS_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case FETCH_COMMENTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        comments: action.data,
        error: null
      };
    case FETCH_COMMENTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
};