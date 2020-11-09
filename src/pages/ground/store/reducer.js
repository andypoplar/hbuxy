import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  showScroll: '111111'
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_SHOW:
      return state.merge({
        showScroll: action.isShow
      })
    default:
      return state
  }
}
