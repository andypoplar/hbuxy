import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  sayList: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SAY_LIST_DATA:
      return state.merge({
        sayList: fromJS(action.sayList)
      })
    default:
      return state
  }
}
