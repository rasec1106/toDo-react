import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      todos: [
        'Learn React',
        'Do Laundry'
      ],
      todoToAdd:""
    };
  
    //this binding is neccesary to make 'this' work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }


  handleChange(event){
    const nextTodoToAdd = event.target.value;

    this.setState({
      todoToAdd: nextTodoToAdd
    });
  }

  handleClick(event){
    const nextTodos = this.state.todos.concat(this.state.todoToAdd);
    const nextTodoToAdd = "";
    
    this.setState({
      todos: nextTodos,
      todoToAdd: nextTodoToAdd
    });
  }

  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>
          Welcome to my toDo List
        </h2>        
      </header>
      <section>
        <ul>
          {this.state.todos.map((todo,index)=>
          <li key={index}>{todo}</li>)}
        </ul>

        <input type="text" 
        placeholder="New Todo"
        value={this.state.todoToAdd}
        onChange={this.handleChange}
        /**
         * If you dont want to 'bind' this you can implement the handleChange as an arrow function:
         *      handleChange= (evt)=>{...}
         * and then call the function normally
         *      onChange={this.handleChange}
         * 
         *Alternatively you can use an arrow function:
         *      onChange={()=>this.handleChange}
         * 
         * The problem with this syntax is that a different callback is created each time the 
         * handleChange renders. In most cases, this is fine. However, if this callback is passed 
         * as a prop to lower components, those components might do an extra re-rendering.
         *  
         * We generally recommend binding in the constructor or using the class fields syntax, 
         * to avoid this sort of performance problem.
         * */        
        />
        <button onClick={this.handleClick}>Add Todo</button>
      </section>
    </div>
  );
  }
}

export default App;
