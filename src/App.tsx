import { useState } from 'react';

import type { Project, Todo } from './core/Models';
import TodoProjects from './ui/TodoProjects'; 
// import './style.css'


function App() {
  const [projects, setProjects] = useState<Project[]>([
    {
      id: crypto.randomUUID(),
      title: 'JS Course',
      tasks: [],
    },
    {
      id: crypto.randomUUID(),
      title: 'React Course',
      tasks: [],
    },
  ]);

  // Root-level update: Appends a new project immutably to the state array.
  const handeAddProjects = (title:string)=>{
     const newProject={
      id:crypto.randomUUID(),
      title:title,
      tasks:[]
     }
     setProjects( (prevProjects)=>[...prevProjects , newProject])
  }

  // Single-level nested update: 
  // Locates the target project by ID and immutably appends a new task to its 'tasks' array.
  const handleAddTask =(projectId:string , taskTitle:string)=>{
    const newTask:Todo={
      id:crypto.randomUUID(),
      title:taskTitle,
      isDone:false,
    }

    setProjects(
      (prevProjects)=>{
         return  prevProjects.map((project)=>{
          if(project.id===projectId){
            return{
              ...project ,
              tasks:[...project.tasks , newTask]
            }
          }
          return project;
        })
      }
    )
  }

   // Uses early return for untouched projects, preventing unnecessary re-renders.
   // Rebuilds only the modified project and the specific toggled task to maintain strict reference equality.
   const handleToggleTask = (projectId:string , taskId:string)=>{
    // console.log("2. Reached App.tsx with:", { projectId, taskId });
    setProjects((prevProjects)=>{ 
      return prevProjects.map((project)=>{
          if(project.id !==projectId)
            return project;

          return {
            ...project , 
             tasks :project.tasks.map((task)=>{
              if (task.id===taskId){
                return {
                  ...task , 
                  isDone: !task.isDone  
                }
              }
              return task ;
             })
          }
      })
    })
   }
  return (
      
<>
       {/* <!-- Main Container: Border uses #0d4755 --> */}
    <main className="w-full max-w-4xl bg-white border-2 border-[#0d4755] rounded-xl shadow-lg mt-10 overflow-hidden">
      
      {/* <!-- Header Area --> */}
      <header className="bg-[#0e1f17] text-white p-6 flex flex-col items-center">
        <h1 className="text-2xl font-bold"> My TODO</h1>
        <p className="text-[#e5c065] text-sm mt-1">Project & Task Breakdown</p>
      </header>

      {/* <!-- Create Project Section --> */}
            <TodoProjects projects={projects} onAddProject={handeAddProjects} onAddTask={handleAddTask} onToggleTask={handleToggleTask} />

    </main>


</>


    
  );
}

export default App;