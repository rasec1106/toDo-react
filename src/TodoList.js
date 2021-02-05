import React from 'react';
import Todo from './Todo'
let id=0;



class TodoList extends React.Component{

    constructor(props){
        super(props);
        this.state={
            todos: [],
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }

    addTodo(){
        const text = prompt("Todo text please");
        this.setState({
            todos: [...this.state.todos,{id: id++, text: text, checked: false}],
        });
    }

    removeTodo(v){
        console.log("Entered",v, this.state.todos);
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== v),
        });
    }

    toggleTodo(id){
        this.setState({
            todos: this.state.todos.map( todo=>{
                if(todo.id !== id) return todo;
                return {
                    id: todo.id,
                    text: todo.text,
                    checked: !todo.checked,
                }
            }),
        });
    }

    render(){
        return(
            <div>
                <div>Todo count: {this.state.todos.length}</div>
                <div>Unchecked todo count: {this.state.todos.filter(todo=>!todo.checked).length}</div>
                <button onClick={this.addTodo}>add Todo</button>
                <ul>
                    {this.state.todos.map((todo) => (
                    <Todo 
                        todo={todo}
                        onDelete={()=>this.removeTodo(todo.id)}
                        onChecked={()=>this.toggleTodo(todo.id)}
                    />
                    ))}

                </ul>

            </div>
        )
    }
}

export default TodoList;