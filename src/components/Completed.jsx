import React from 'react'
import { useSelector } from "react-redux";
const Completed = () => {
  const tasks = useSelector((store) => store.todos).filter(task => task.isCompleted);

  return (
   <>
   <div style={{margin: '3rem', border: '1px solid red'}}>
       <h4>Completed tasks:</h4>
            {
                tasks.map(task => (<div key={task.id}>
                    <p>{task.title}</p>
                </div>))
            }
            </div>
   </>
  )
}

export default Completed