import React, { Component } from 'react';

class TodoItem extends Component {
  render(props) {
    return (
    <li>
      <input 
        type="checkbox" 
        checked={this.props.isCompleted}
        onChange={(event) => this.props.onToggleTodo(this.props.index, event.target.checked)}
      />
      {this.props.children}
    </li>
    )
  }
}

export default TodoItem