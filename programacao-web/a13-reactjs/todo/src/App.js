import React, { Fragment } from 'react'
import './App.css'

import Button from './components/Button'

const App = () => {
  return(
    <Fragment>
      <h1>TODO</h1>
      <ul>
        <li>Comprar leite <Button value="X"/></li>
        <li>Comprar pão <Button value="X"/></li>
        <li>Jogar LOL <Button value="X"/></li>
        <li>Estudar ReactJS <Button value="X"/></li>
      </ul>
      <input type="text" id="todo_item" placeHolder="Digite um ítem"/>
      <Button value="Adicionar"/>
    </Fragment>
  )
}

export default App