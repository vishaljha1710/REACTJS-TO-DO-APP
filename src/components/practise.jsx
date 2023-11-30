import { useRef, useState } from "react";

export const Practise = ({}) => {

  const[x,setx]=useState(0);
const inputref=useRef(null);
const [y,sety]=useState([]);
const click=()=>{
    console.log("clicked",x);
    setx(x+1);
}
  return (
    
    <div>
        <button onClick={()=>{setx(10)}}>set 10</button>
        {x}
        {x%2==0?<h1>"even"</h1>:<h1>"odd"</h1>}
      <button onClick={()=>{click()}}>Click me</button>{x}
        
        

             <div>
             <input ref={inputref} type="text"/>
             <button onClick={()=>{sety([...y,inputref.current.value])}}>Submit</button>
             {y.map((item,index)=>{return <h2 key={index}>{item}</h2>})}
             </div>
        </div>
  )
}
