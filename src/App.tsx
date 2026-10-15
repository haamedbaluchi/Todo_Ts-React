import { useState } from 'react';

import type { Project } from './core/Models';
import TodoProjects from './ui/TodoProjects'; 
// import './style.css'


function App() {
  const [projects, setProjects] = useState<Project[]>([
    // {
    //   id: crypto.randomUUID(),
    //   title: 'JS Course',
    //   tasks: [],
    // },
    // {
    //   id: crypto.randomUUID(),
    //   title: 'React Course',
    //   tasks: [],
    // },
  ]);

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
      <section className="p-6 border-b-2 border-[#367a87]/20 bg-white">
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="text" 
            placeholder="New project name (e.g., Learn OOP)..." 
            className="flex-1 border-2 border-[#0d4755]/30 rounded-lg px-4 py-3 focus:outline-none focus:border-[#367a87] transition-colors"
          />
          {/* <!-- Main Action Button: #367a87 --> */}
          <button className="bg-[#367a87] hover:bg-[#0d4755] text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-sm">
            Add Project
          </button>
        </div>
      </section>

      {/* <!-- Projects List (Accordions) --> */}
      <section className="p-6 flex flex-col gap-4">

        {/* <!-- Project Item 1 (Expanded by default using 'open' attribute) --> */}
        <details open className="group border-2 border-[#0d4755] rounded-lg overflow-hidden bg-white">
          {/* <!-- Accordion Header (Summary) --> */}
          <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 select-none list-none">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#0e1f17]">1. Learn C# Fundamentals</h2>
              {/* <!-- Progress Bar Track --> */}
              <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden border border-[#0d4755]/20">
                {/* <!-- Progress Bar Fill: #c48b00 --> */}
                <div className="bg-[#c48b00] h-2.5 rounded-full" style={{width: '75%'}}></div>
              </div>
              <p className="text-xs text-[#367a87] mt-1 font-semibold">75% Completed (3/4 Tasks)</p>
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
              />
              {/* <!-- Secondary Action Button: #e5c065 --> */}
              <button className="bg-[#e5c065] hover:bg-[#c48b00] text-[#0e1f17] px-4 py-2 rounded text-sm font-bold transition-colors">
                Add Task
              </button>
            </div>

            {/* <!-- Task List --> */}
            <ul className="flex flex-col gap-2">
              <li className="flex items-center justify-between bg-white p-3 rounded border border-[#0d4755]/20 shadow-sm">
                <div className="flex items-center gap-3 line-through text-gray-500 opacity-70">
                  <input type="checkbox" checked className="w-4 h-4 accent-[#367a87] cursor-pointer" />
                  <span>Variables and Data Types</span>
                </div>
                {/* <!-- Delete Icon/Text: #94510b --> */}
                <button className="text-[#94510b] hover:text-red-700 font-bold text-sm">Delete</button>
              </li>

              <li className="flex items-center justify-between bg-white p-3 rounded border border-[#0d4755]/20 shadow-sm">
                <div className="flex items-center gap-3 font-medium text-[#0e1f17]">
                  <input type="checkbox" className="w-4 h-4 accent-[#367a87] cursor-pointer" />
                  <span>Control Flow (If, Switch, Loops)</span>
                </div>
                <button className="text-[#94510b] hover:text-red-700 font-bold text-sm">Delete</button>
              </li>
            </ul>

          </div>
        </details>

        {/* <!-- Project Item 2 (Closed) --> */}
        <details className="group border-2 border-[#0d4755] rounded-lg overflow-hidden bg-white">
          <summary className="flex items-center justify-between p-4 cursor-pointer hover:bg-slate-50 select-none list-none">
            <div className="flex-1">
              <h2 className="text-lg font-bold text-[#0e1f17]">2. Object-Oriented Programming</h2>
              <div className="w-full max-w-md bg-gray-200 rounded-full h-2.5 mt-2 overflow-hidden border border-[#0d4755]/20">
                <div className="bg-[#c48b00] h-2.5 rounded-full" style={{width : '0%'}}></div>
              </div>
              <p className="text-xs text-[#367a87] mt-1 font-semibold">0% Completed (0/2 Tasks)</p>
            </div>
            <span className="text-[#0d4755] transition-transform duration-300 group-open:-rotate-180 text-2xl">
              &#9662;
            </span>
          </summary>
          
          <div className="p-4 border-t-2 border-[#0d4755]/10 bg-slate-50">
            {/* <!-- Tasks UI similar to above --> */}
            <p className="text-sm text-gray-500 italic">No tasks added yet.</p>
          </div>
        </details>

      </section>
    </main>


      <TodoProjects projects={projects} />
</>


    
  );
}

export default App;