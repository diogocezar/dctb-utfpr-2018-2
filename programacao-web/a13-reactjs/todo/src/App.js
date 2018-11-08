import React, { Component, Fragment } from 'react'
import './App.css'

import Button from './components/Button'

class App extends Component {
  state = {
    todo_text: '',
    todos : [
      'Comprar leite',
      'Comprar pão',
      'Jogar LOL',
      'Estudar ReactJS'
    ]
  }
  add = () => {
    if(this.state.todo_text.length)
      this.setState({
        todo_text: "",
        todos: [...this.state.todos, this.state.todo_text]
      });
  }
  removeItem = (item) => {
    this.setState({
      todos: this.state.todos.filter((itemList) => {
        return itemList !== item
      })
    })
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
    // this.setState({
    //   todo_text : e.target.value
    // })
  }
  render(){
    return <Fragment>
        <h1>TODO</h1>
        <ul>
          {this.state.todos.map(
            (item, index) => {
              return <li key={index}>{item} <Button value="X" onClick={() => this.removeItem(item)}></Button></li>
            }
          )}
        </ul>
        <input type="text" id="todo_text" value={this.state.todo_text} placeholder="Digite um ítem" onChange={this.handleChange}/>
        <Button value="Adicionar" onClick={this.add} />
      </Fragment>;
  }
}

export default App