import React from 'react';
import './App.css';
import Todo from './pages/Todo';
import Login from './pages/Login';
import {useSelector} from 'react-redux'
function App() {
  const isLoggedIn = useSelector(store=> store.userDetails);
  if(isLoggedIn){
    return <Login/>
  }
  return (
    <div className="App">
     <Todo/>
    </div>
  );
}

export default App;
