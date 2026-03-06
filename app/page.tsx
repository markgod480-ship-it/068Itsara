"use client"
import { type ChangeEventHandler, useState } from 'react'

interface TodoFormProps {
  addTodo : (todo:string) => void
}

const TodoForm = ({addTodo} : TodoFormProps) => {
  const [todo, setTodo] = useState('')
  const handleAddFormChange = (event) =>{
    setTodo(event.target.value)
  }

  const handleAddTodo = () =>{
    addTodo(todo)
    setTodo('')
  }

  return (
    <>
      <input type="text" className="border-1 rounded-2xl" onChange={handleAddFormChange} value={todo}/>
      <button onClick={handleAddTodo}>Add</button>
    </>
  )
}

interface Todo{
  id: number,
  content: string
}

interface TodosProps {
  todos: Todo[]
}

const TodoList = ({todos} : TodosProps) =>{
  return(
      <ul>
        {todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
      </ul>
  )
}

const IndexPage = () => {
  const [isCheck, setIsCheck] = useState(false)
  const [todos, setTodos] = useState([
    {id: 1, content: "Todo1"},
    {id: 2, content: "Todo2"},
    {id: 3, content: "Todo3"},
    {id: 4, content: "Todo4"},
    {id: 5, content: "Todo3"}
  ])

  
  
  const addTodo = (todo:string) =>{
    setTodos([{id: todos.length + 1, content: todo}, ...todos])
  }

  const handleIsCheck = (event) =>{
    setIsCheck(event.target.checked)
  }
  return (
    <>
    <TodoForm addTodo={addTodo}/>
    <TodoList todos={todos}/>
    { isCheck && <div>Checked</div>}
    <input type="checkbox" name="" id="" onChange={handleIsCheck}/>
    </>
  )
}
export default IndexPage