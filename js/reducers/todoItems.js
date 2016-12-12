const DEFAULT_STATE = {}

export default (state = DEFAULT_STATE, {type, payload} = {}) => {
  switch (type) {
    case 'TODO_ITEM_ADDED':
      return {...state, lastModified: Date.now()}
    default:
      return state
  }
}
