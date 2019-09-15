import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

import TodoInput from './TodoInput';
import TodoItem from './TodoItem';
import {
  addTodo,
  deleteTodo,
  completeTodo
} from '../../store/actions/actionTodos';

class TodoList extends Component {
  state = {
    todoText: ''
  };
  handleChange = ({ target: { value } }) => {
    this.setState({
      todoText: value
    });
  };
  addTodo = ({ key }) => {
    const { todoText } = this.state;
    if (todoText && key === 'Enter') {
      const { addTodo } = this.props;
      addTodo({
        text: todoText,
        isCompleted: false
      });
      this.setState({
        todoText: ''
      });
    }
  };
  render() {
    const { todoText } = this.state;
    const { todos, deleteTodo, completeTodo } = this.props;
    const isTodoExists = todos && todos.length > 0;
    return (
      <div className="list flex-1 mb-5 max-h-1/2 overflow-y-auto">
        <h1 className="list-title">Things to do</h1>
        <TodoInput
          value={todoText}
          onChange={this.handleChange}
          onKeyPress={this.addTodo}
        />
        {isTodoExists &&
          todos.map(todo => {
            return (
              <TodoItem
                key={todo.id}
                todo={todo}
                deleteItem={deleteTodo}
                completeItem={completeTodo}
              />
            );
          })}
      </div>
    );
  }
}

const mapStateToProps = state => {
  const userId = state.firebase.auth.uid;
  return {
    userId: userId,
    todos: state.firestore.ordered.todos
  };
};

const mapDispatchToProps = {
  addTodo,
  deleteTodo,
  completeTodo
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  ),
  firestoreConnect(({ userId }) => [
    {
      collection: 'todos',
      where: ['userId', '==', userId]
    }
  ])
)(TodoList);
