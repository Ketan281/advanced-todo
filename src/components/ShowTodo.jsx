import React, { useEffect, useState } from 'react'
import { getTodoItems } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';
const ShowTodo = () => {
  const dispatch = useDispatch();
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");
  const tasks = useSelector((store) => store.todos);

  useEffect(() => {
    dispatch(getTodoItems());
  }, []);

  useEffect(() => {
    const newTodos = tasks.filter(task => !task.isCompleted);
    setFilteredTasks(newTodos);
  }, [tasks]);

  const handleSearch = () => {
    let matchedItems;
    if(searchedValue !== "") {
        matchedItems = filteredTasks.filter(task => task.title.includes(searchedValue));
    } else {
        matchedItems = tasks.filter(task => !task.isCompleted);
    }
    setFilteredTasks(matchedItems);
  };

  const deleteItem = (id) => {
    fetch(`http://localhost:8000/todos/${id}`, {
      method: 'DELETE'
    })
    .then((response) => response.json())
    .then(()=>  dispatch(getTodoItems()));
  };

  const handleMarkAsComplete = (task) => {
    fetch(`http://localhost:8000/todos/${task.id}`, {
        method: 'PUT',
        headers: {
            "Content-Type": 'application/json',
        },
        body: JSON.stringify(
            {
                ...task,
                isCompleted: true
            }
        )
    }).then(() => {
        dispatch(getTodoItems());
    });
  }
  return (
    <div style={{ margin: "3rem", border: "1px solid red" }}>
      <div>
        <input
          type="text"
          value={searchedValue}
          onChange={(e) => setSearchedValue(e.target.value)}
        />
        <button onClick={() => handleSearch()}>Search</button>
      </div>
      <div>
        {filteredTasks.map((task, index) => (
          <div key={task.id}>
            <p>{task.title}</p>
            <button onClick={() => deleteItem(task.id)}>Delete</button>
            <button onClick={() => handleMarkAsComplete(task)}>Mark as completed</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowTodo