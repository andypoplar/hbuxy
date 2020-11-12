import axios from 'axios';
import * as actionTypes from './actionTypes';

const changeDetail = (data) => ({
  type: actionTypes.CHANGE_DETAIL,
  data
})

export const getDetail = (id) => {
  return (dispatch) => {
    axios.get(``).then(res => {
      const result = res.data.data
      console.log(result);
      dispatch(changeDetail(result))
    })
  }
}