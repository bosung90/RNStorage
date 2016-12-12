import {connect} from 'react-redux'
import store from '../store'
import * as actions from './actions'
import TodoItems from './TodoItems'
import {getTodoItems} from '../reducers'

const mapStateToProps = (state, props) => ({
  ...getTodoItems(state),
  dataSource: store.todoItemDS.cloneWithRows(store.getTodoItems())
})

const mapDispatchToProps = {
  ...actions
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoItems)
