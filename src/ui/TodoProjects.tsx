import React from 'react'
import type {Project}  from '../core/Models'

interface todoProjectProps {
  projects : Project [];
}
function TodoProjects({projects} :todoProjectProps ) {
  return (
    <div>
      {projects.map((project)=>(
        <h2 key={project.id}>{project.title}</h2>
      ))}
      </div>
  )
}

export default TodoProjects;