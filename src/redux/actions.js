export const ADD_TODO_ITEM = "ADD_TODO_ITEM";
export const GET_TODO_ITEM = "GET_TODO_ITEM";
export const FETCHED_TODO_ITEMS = "FETCHED_TODOITEMS";
export const LOGIN = "LOGIN";

export const addTodoItem = (data) =>({
    type: ADD_TODO_ITEM,
    payload:data
});
export const fetchTodos = (todos) => ({
    type: FETCHED_TODO_ITEMS,
    payload:todos
})
export const getTodoItems = () =>{
    return (dispatch)=>{
        fetch("http://localhost:8000/todos")
        .then((res)=>res.json())
        .then((data)=>dispatch(fetchTodos(data)))
        }
    }
export const login = (userId) =>({
   type:LOGIN,
   payload: userId
})