import * as ActionTypes from '../actionTypes';

export const initialState = {
  data: [],
  currency: localStorage.getItem('currency') || 'USD'
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };
    case ActionTypes.CHANGE_CURRENCY:
      return {
        ...state,
        currency: action.payload
      };
    default:
      return state;
  }
};
