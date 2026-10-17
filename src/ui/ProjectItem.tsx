import React, { useRef } from 'react'
import type { Project } from '../core/Models'
import Todoitem from './Todoitem';

interface ProjectItemProps{
    project:Project;
    onAddTask: (projectId:string , title:string)=> void;
      onToggleTask:(projectId:string , taskId:string)=> void;

}


function ProjectItem({project , onAddTask , onToggleTask}:ProjectItemProps) {

  // Reference for task input to manipulate DOM directly without triggering re-renders
  const taskInputref =useRef<HTMLInputElement>(null)

// Handles task submission and clears the input field upon success
const handleAddTask =()=>{
  const taskTitle=taskInputref.current?.value.trim();
  if(! taskTitle) return;

  onAddTask((project.id) , taskTitle)

  if(taskInputref.current){
    taskInputref.current.value = '';
    taskInputref.current.focus();
  }
}

// Separated event handler to avoid KeyboardEvent vs MouseEvent type collisions
const handleTaskKeyDown= (event:React.KeyboardEvent<HTMLInputElement>)=>{
  if(event.key==='Enter')
    handleAddTask()
}

//progress Bar
let totalTasks=project.tasks.length;
let completedTasks=project.tasks.filter((task)=>task.isDone).length
const progressPrecentage=totalTasks=== 0
? 0
:Math.round((completedTasks/totalTasks)*100);

  return (

    <details  open className="group border-2 border-[#0d4755] rounded-lg overflow-hidden bg-white">
          {/* <!-- Accordion Header (Summary) --> */}
          <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 select-none list-none">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#0e1f17]">{project.title}</h2>
              {/* <!-- Progress Bar Track --> */}
              <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden border border-[#0d4755]/20">
                {/* <!-- Progress Bar Fill: #c48b00 --> */}
                <div className="bg-[#c48b00] h-2.5 rounded-full" style={{width: `${progressPrecentage}%`}}></div>
              </div>
              {/* TODO: Implement dynamic progress calculation here */}
              <p className="text-xs text-[#367a87] mt-1 font-semibold">{progressPrecentage}% Completed ! ({completedTasks}/{totalTasks} Tasks) </p>
            </div>
            {/* <!-- Arrow Icon (Rotates on open) --> */}
            <span className="text-[#0d4755] transition-transform duration-300 group-open:-rotate-180 text-2xl">
              &#9662;
            </span>
          </summary>

          {/* <!-- Accordion Body (Tasks) --> */}
          <div className="p-4 border-t-2 border-[#0d4755]/10 bg-slate-50">
            
            {/* <!-- Add Task Input --> */}
            <div className="flex gap-2 mb-4">
              <input 
                type="text" 
                placeholder="Add a new task..." 
                className="flex-1 border border-[#367a87]/40 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#c48b00]"
                ref={taskInputref}
                onKeyDown={handleTaskKeyDown}
              />
              {/* <!-- Secondary Action Button: #e5c065 --> */}
              <button onClick={handleAddTask} className="bg-[#e5c065] hover:bg-[#c48b00] text-[#0e1f17] px-4 py-2 rounded text-sm font-bold transition-colors">
                Add Task
              </button>
            </div>

            {/* <!-- Task List --> */}
            <ul className="flex flex-col gap-2">
              {project.tasks.map((task)=>(
                // Closure: Binds project.id and task.id at this level, keeping Todoitem a pure reusable component
                <Todoitem key ={task.id} task={task} onToggle={()=>{
                  console.log("Triggered in ProjectItem for:", project.id, task.id);
                  onToggleTask(project.id, task.id)}}/>
              ))}
            </ul>

          </div>
        </details>
       

    )
}

export default ProjectItem