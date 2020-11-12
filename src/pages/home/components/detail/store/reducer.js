import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  avatar: '',
  userName: '',
  time: '',
  content: '',
  imgs: [],
  comment: []
})

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_DETAIL:
      return state.merge({
        avatar: '',
        userName: '',
        time: '',
        content: '',
        imgs: [],
        comment: []
      })
    default:
      return state
  }
}