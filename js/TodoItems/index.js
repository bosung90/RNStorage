import {connect} from 'react-redux'
import store from '../store'
import * as actions from './actions'
import TodoItems from './TodoItems'
import {getTodoItems} from '../reducers'

// Realm.Results is auto-updating, therefore no need to re-fetch the data
const todoItemsResults = store.getTodoItems()

const mapStateToProps = (state, props) => ({
  ...getTodoItems(state),
  dataSource: store.todoItemDS.cloneWithRows(todoItemsResults)
})

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems)
