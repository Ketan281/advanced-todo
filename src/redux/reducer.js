import {
    FETCHED_TODO_ITEMS,
    LOGIN
} from './actions';

const initialState = {
    todos: [],
    userDetails:{
        isLoggedIn: false,
        userName: ''   
     }
};
export const todoReducer = (store = initialState,action)=>
{
    switch(action.type){
        case FETCHED_TODO_ITEMS:
             return{
                 ...store,
              todos:action.payload
            };
            case LOGIN:
                return{
                    ...store,
                    userDetails:{
                        isLoggedIn: true,
                        userName:action.payload
                    }
                }
            default:
             return store;     
    }
}