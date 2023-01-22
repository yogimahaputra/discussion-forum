import { ActionTypePreload } from "./LoadingAction"

function isPreloadReducer(isPreload = true, action = {}) {
  switch (action.type) {
    case ActionTypePreload.SET_IS_PRELOAD:
      return action.payload.isPreload
    default:
      return isPreload
  }
}

export default isPreloadReducer
