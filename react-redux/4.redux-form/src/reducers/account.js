import {LOAD} from '../constants/action-types'

const accountReducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: action.data
      }
    default:
      return state
  }
}
export default accountReducer
