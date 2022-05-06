import React,{useState} from 'react'
import { useDispatch } from 'react-redux';
//import { fetchTodos } from '../redux/actions';
import {
    login
} from "../redux/actions"
const Login = () => {
    const [userName, setUserName] = useState('');
    const dispatch = useDispatch()
  const handleSubmit = (e) =>{
      e.preventDefault();
     fetch(`http://localhost:8000/users?userName=${userName}`)
     .then((res)=>res.json())
     .then((data)=>{
     if(data.length > 0){
     dispatch(login(data))
  }
});

  }
  return (
    <>
     <form onSubmit = {handleSubmit}>
       <h1>Login Page</h1>
         <input 
         name="userName"
         type="text"
         placeholder='Enter Username'
         value = {userName}
         onChange = {(e)=>setUserName(e.target.value)}
         />
         <input 
         type="submit"
         value = "LOGIN"
         disabled={userName===""}
         />

     </form>
    </>
  )
}

export default Login