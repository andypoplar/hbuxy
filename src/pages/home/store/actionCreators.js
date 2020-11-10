import * as actionTypes from './actionTypes'
import axios from 'axios';

const changeSayListData = (sayList) => ({
  type: actionTypes.CHANGE_SAY_LIST_DATA,
  sayList
})

export const getHomeSayList = () => {
  return (dispatch) => {
    axios.get('/api/saylist.json').then(res => {
      const result = res.data.data
      dispatch(changeSayListData(result))
    })
  }
}