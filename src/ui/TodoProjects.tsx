import React, { useRef } from 'react'
import type {Project}  from '../core/Models'
import ProjectItem from './ProjectItem';

interface TodoProjectProps {  
  projects : Project [];
  onAddProject: (title :string)=>void
  onAddTask:(projectId:string , title:string)=> void
  onToggleTask:(projectId:string , taskId:string)=> void
}


function TodoProjects({projects , onAddProject , onAddTask ,onToggleTask} :TodoProjectProps  ) {

      // Uncontrolled input for performance: avoids re-rendering the whole component on every keystroke
      const projectInputRef= useRef<HTMLInputElement>(null)
      
      // Extracts the value, validates it, and triggers the state update in the parent App
      const handleSubmit = () => {
        const title =projectInputRef.current?.value.trim()
        if( ! title ) return;

      onAddProject(title)

      // UX Improvement: Clear the input and refocus for rapid consecutive entries
  if(projectInputRef.current){
    projectInputRef.current.value= ' '
    projectInputRef.current.focus()
      }
      }

    // Keyboard accessibility: allows submitting via the Enter key
    const handleKeyDown=(event: React.KeyboardEvent<HTMLInputElement>)=>{
      if(event.key==='Enter'){
        handleSubmit();
      }
    }

  return (
      <>
                <section className="p-6 border-b-2 border-[#367a87]/20 bg-white">
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            placeholder="New project name (e.g., Learn OOP)..." 
            className="flex-1 border-2 border-[#0d4755]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#367a87] transition-colors"
            ref={projectInputRef}
            onKeyDown={handleKeyDown}
          />
          {/* <!-- Main Action Button: #367a87 --> */}
          <button   onClick={handleSubmit} className="bg-[#367a87] hover:bg-[#0d4755] text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-sm">
            Add Project
          </button>
        </div>
      </section>

      {/* <!-- Projects List (Accordions) --> */}
      <section className="p-6 flex flex-col gap-4">
        
        {/* <!-- Project Item 1 (Expanded by default using 'open' attribute) --> */}
        <div>
      {/* Prop Drilling: Passing down state and delegated handlers to individual project items */}
      {projects.map((project)=>(


             <ProjectItem key={project.id} project={project} onAddTask={onAddTask} onToggleTask={onToggleTask}/>
        
      ))}
      </div>
      </section>
      </>
  )
}

export default TodoProjects;