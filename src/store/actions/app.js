import * as ActionTypes from '../actionTypes'
import {Api} from "../../services";
import {formatData} from "../../utils";

const fetchDataStart = () => {
  return { type: ActionTypes.FETCH_DATA_START }
}

const fetchDataSuccess = (payload) => {
  return { type: ActionTypes.FETCH_DATA_SUCCESS, payload }
}
const fetchDataError = () => {
  return { type: ActionTypes.FETCH_DATA_ERROR }
}

export const changeCurrency = (payload) => {
  localStorage.setItem('currency', payload)
  return {
    type: ActionTypes.CHANGE_CURRENCY,
    payload
  }
}

export const fetchData = () => {
  return async dispatch => {
    try {
      dispatch(fetchDataStart())
      const data = await Api.fetchData()
      dispatch(fetchDataSuccess(formatData(data)))

    } catch (e) {
      dispatch(fetchDataError())
    }
  }
}