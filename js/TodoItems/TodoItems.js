import React, {Component} from 'react'
import {
  View,
  Text,
  TextInput,
  StyleSheet
} from 'react-native'
import { ListView } from 'realm/react-native'

export default class App extends Component {
  state = {textInput: ''}
  _onSubmit (e) {
    if (e && e.nativeEvent.text.trim().length > 0) {
      this.props.createTodoItem(e.nativeEvent.text.trim())
    }
    this.setState({textInput: ''})
  }
  render () {
    return (
      <View style={styles.container}>
        <TextInput style={styles.textInput}
          onSubmitEditing={(e) => this._onSubmit(e)}
          value={this.state.textInput}
          onChange={(event) => this.setState({textInput: event.nativeEvent.text})} />
        <ListView
          dataSource={this.props.dataSource}
          renderRow={(todoItem) => <Text>{todoItem.value}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 50,
    borderRadius: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    marginHorizontal: 12,
    paddingHorizontal: 12
  }
})
