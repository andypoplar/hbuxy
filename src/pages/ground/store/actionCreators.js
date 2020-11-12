import axios from 'axios'
import * as actionTypes from './actionTypes'

const recentList = (recentList) => ({
  type: actionTypes.RECENT_VIEWED,
  recentList
})

const categoryList = (categoryList) => ({
  type: actionTypes.CATEGORY_LIST,
  categoryList
})

export const changeRecentList = () => {
  return (dispatch) => {
    axios.get(`/api/saylist.json`).then(res => {
      const result = res.data.data
      dispatch(recentList(result))
    })
  }
}

export const changeCategoryList = () => {
  return (dispatch) => {
    axios.get(`/api/saylist.json`).then(res => {
      const result = res.data.data
      dispatch(categoryList(result))
    })
  }
}