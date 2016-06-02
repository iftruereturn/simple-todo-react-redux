import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
// import VisibilityFilter from '../components/VisibilityFilter';
import * as todoListActions from '../actions/TodoListActions';
// import * as visibilityFilterActions from '../actions/visibilityFilterActions';

class App extends Component {
  render() {
    const { todoList /*, visibilityFilter*/ } = this.props;
    const { addTodo, deleteTodo, toggleTodo } = this.props.todoListActions;
    // const { setVisibilityFilter } = this.props.visibilityFilterActions;

    return <div>
      <TodoList todos={todoList} addTodo={addTodo} deleteTodo={deleteTodo} toggleTodo={toggleTodo}></TodoList>
      {/*<VisibilityFilter setVisibilityFilter={setVisibilityFilter}></VisibilityFilter>*/}
    </div>
  }
}

function mapStateToProps (state) {
  return {
    todoList: state.todoList
    // visibilityFilter: state.visibilityFilter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    todoListActions: bindActionCreators(todoListActions, dispatch)
    // visibilityFilterActions: bindActionCreators(visibilityFilterActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
