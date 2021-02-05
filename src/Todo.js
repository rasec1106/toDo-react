import React from 'react';
class Todo extends React.Component {
    render(){
        return(
                <li>
                    <input type="checkbox" checked={this.props.todo.checked} onChange={this.props.onChecked}/>
                    <button onClick={this.props.onDelete}>delete</button>
                    <span>{this.props.todo.text}</span>
                </li>            
        );
    }

}
export default Todo;