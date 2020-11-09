import { combineReducers } from 'redux-immutable'
import { reducer as homeReducer } from '../pages/home/store'
import { reducer as groundReducer } from '../pages/ground/store'
import { reducer as announceReducer } from '../pages/announce/store'

const reducer = combineReducers({
  home: homeReducer,
  ground: groundReducer,
  announce: announceReducer
})

export default reducer