import React from 'react'
import AddTodo from "../components/AddTodo"
import ShowTodo from '../components/ShowTodo'
import Completed from '../components/Completed'
const Todo = () => {
  return (
    <div>
    
       <AddTodo/> 
       <ShowTodo/>
       <Completed/>
    </div>
  )
}

export default Todo