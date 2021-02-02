import React, { Component } from 'react';

class TodoItem extends Component {
  render(props) {
    return <li><input type="checkbox" checked={this.props.isCompleted} />{this.props.children}</li>
  }
}

export default TodoItem