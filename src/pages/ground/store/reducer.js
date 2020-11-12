import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  recentViewedList: [],
  categoryList: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.RECENT_VIEWED:
      return state.merge({
        recentViewedList: fromJS(action.recentList)
      })
    case actionTypes.CATEGORY_LIST:
      return state.merge({
        categoryList: fromJS(action.categoryList)
      })
    default:
      return state
  }
}
