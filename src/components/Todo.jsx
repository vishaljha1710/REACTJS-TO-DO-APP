import { useEffect, useRef, useState } from 'react'
import './CSS/Todo.css'
import { Todoitems } from './Todoitems';

export const Todo = () => {
  const [count,setcount]=useState(0);
  const [task,settask]=useState([])
  const taskref=useRef(null)
  const add=()=>{
    setcount(count+1);
    settask([...task,{no:count,text:taskref.current.value,display:""}]);
    taskref.current.value="";
    
  }
  useEffect(()=>{
    settask(JSON.parse(localStorage.getItem("task")));
   setcount(JSON.parse(localStorage.getItem("task_count")));
  },[])

  useEffect(()=>{

    setTimeout(() => {
    console.log(task);
    localStorage.setItem("task",JSON.stringify(task));
    localStorage.setItem("task_count",JSON.stringify(count))
    }, 50);

  },[task])

  return (
    <div className='todo'>
      <div className='todo-header'>To-Do-List</div>
      <div className='todo-add'>
        <input ref={taskref} type='text' placeholder='Add task here...' className='todo-input'/>
        <div onClick={()=>{add()}} className="todo-add-btn">Add</div>
      </div>
      <div className="todo-list">
       {task.map((items,index)=>{
        return <Todoitems key={index} setcount={setcount} settask={settask} no={items.no} text={items.text} display={items.display} />
       })}
        </div>
    </div>
  )
}
