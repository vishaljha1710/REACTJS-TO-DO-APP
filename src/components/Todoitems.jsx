import './CSS/Todoitems.css'
import tick from './Assets/tick.png'
import not_tick from './Assets/not_tick.png'
import cross from "./Assets/cross.png"
export const Todoitems = ({no,text,display,settask,setcount}) => {
  const del=(no)=>{
    let data =JSON.parse(localStorage.getItem("task"));
    let count =JSON.parse(localStorage.getItem("task_count"));
    setcount(count-1);
    data=data.filter((task)=>task.no!==no);
    settask(data);
  }
  const toggle=(no)=>{
    let data =JSON.parse(localStorage.getItem("task"));
    for(let i=0;i<data.length;i++){
      if(data[i].no===no){
        if(data[i].display==="")
        data[i].display="line-through";
      else
      data[i].display="";
      break;
      }
    
    }
    settask(data);
  }
  return (
    <div className='todoitems'>
      <div className={`todoitems-container ${display}`} onClick={()=>{toggle(no);}} >
        {display===""?<img src={not_tick} alt=''/>:<img src={tick} alt=''/>}
        <div className="todoitems-text">{text}</div>
      </div>
      <img className='todoitems-cross-icon' onClick={()=>{del(no)}} src={cross} alt=''/>
    </div>
  )
}