import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    const [task,setTask] = useState("");
    const [tasks,setTasks] = useState([]);
  
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(task.trim() === ""){       // isse blank item insert nahi hota
          return; 
        }
        setTasks([...tasks,{text:task,done:false}]);
        setTask("");                 //search box automatic refresh karne ke liye

    }
    const toggleTask = (index) =>{
         const newTasks = [...tasks];
         newTasks[index].done = !newTasks[index].done;
         setTasks(newTasks);
    }
    const deleteTask = (index) =>{
         const newTasks = tasks.filter((_,id)=>id!==index);
         setTasks(newTasks);
    }

  return (
    <> 
        <h1>To-do list</h1>
        <form onSubmit = {handleSubmit}>
           <input placeholder="enter the item" type="text" value={task} onChange={(e)=>setTask(e.target.value)}  ></input>
           <button>Add</button>
        </form>
        <ul>
           {tasks.map((t,index)=>(                    //taake individually call na karna pade array ke item ko
              <li key={index} onClick={()=>toggleTask(index)} 
                style={{
                    textDecoration: t.done? "line-through":"none",
                    cursor:"pointer",
                }}>
                {t.text}
                <button onClick={(e)=>{ e.stopPropagation();  //stop event bubbling
                                        deleteTask(index); }
                                } >Delete</button>
                </li>
           ))
         }
         
        </ul>
    </>
  )
}

export default App
