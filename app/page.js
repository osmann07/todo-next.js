"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])
  const submitHandler = (e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}]);
    settitle("");
    setdesc("");
    console.log(mainTask)
  };

  const deleteHandler = (i)=>{
    let copyTask = [...mainTask]
    copyTask.splice(i,1);
    setmainTask(copyTask);
  }

  let renderTask = <h2 className='text-white font-medium'>No Task Available</h2>;
  if (mainTask.length>0){
    renderTask = mainTask.map((t,i)=>{
    return (
    <li key={i} className='flex items-center justify-between'>
      <div className='flex items-center justify-between mb-5 w-2/3'>
        <h5 className='text-2xl font-semibold text-white'>{t.title}</h5>
        <p className='text-lg font-medium text-white'>{t.desc}</p>
      </div>
      <button onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-green-400/60 border-green-900/20 text-white px-4 py-2 rounded font-bold '>Done  </button>
      <button onClick={()=>{
        deleteHandler(i)
      }}
      className='bg-red-400/60 border-green-900/20  text-white px-4 py-2 rounded font-bold'>Delete  </button>
    </li>
    );
  })
  }
  return (
    <>
    <h1 className='bg-black text-white p-5 text-5xl font-mono font-bold text-center'>My To Do List</h1>
    <form onSubmit={submitHandler}>
      <input 
      placeholder='Enter Title here' 
      type='text' 
      className='text-2xl border border-white/20 bg-white/10 backdrop-blur-md m-5 px-4 py-2 rounded-2xl text-white placeholder-white/60 shadow-lg'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}
      />
      <input 
      placeholder='Enter Description here' 
      type='text' 
      className='text-2xl border border-white/20 bg-white/10 backdrop-blur-md m-5 px-4 py-2 rounded-2xl text-white placeholder-white/60 shadow-lg'

      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}
      />
      <button 
      className=' bg-white/20 text-white font-poppins px-4 py-3 text-2xl rounded-2xl m-5'>Add Task</button>
    </form>
    <hr/>
    <div className='p-8  bg-blue-200/10 border border-blue-100/20 backdrop-blur-lg rounded-2xl shadow-md"'>
      <ul>
        {renderTask}
      </ul>
    </div>
    </>
  )
}
export default page