import store from '../store'

export const createTodoItem = (todoText) => {
  store.createTodoItem(todoText)
  return {
    type: 'TODO_ITEM_ADDED'
  }
}
