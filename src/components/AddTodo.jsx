import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { getTodoItems } from '../redux/actions'

const AddTodo = () => {
  const dispatch = useDispatch()
  const [newItemText,setNewItemText] = useState('')
  const handleSubmit = () =>{
     fetch('http://localhost:8000/todos',{
       method: "POST",
       headers:{
         "Content-Type": 'application/json',
       },
       body: JSON.stringify(
         {
           "title": newItemText,
           "userID":'ptweb3',
           "isCompleted":false
         }
       )
     }).then(()=>{
       dispatch(getTodoItems())
     })
  }
  return (
    <div style = {{
      margin: '20px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '5rem',
      border: '1px solid green'
    }}>
      
     <input type="text" onChange= { (e)=>setNewItemText(e.target.value)}/>
     <br/>
     <button onClick={()=>handleSubmit()}>Add todo</button> 
      
      </div>
  )
}

export default AddTodo