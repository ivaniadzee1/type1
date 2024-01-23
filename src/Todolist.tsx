import { useState } from 'react'
import './todolist.css'



const Todolist = ({todo,handleRemove}:any) => {
    const [checked,setChecked] = useState(false)
  return (
 
   <div className='flex'>
          <p className='todotxt'>{todo.title}</p>
          { !checked ? <button onClick={() => setChecked(prev => !prev)} className='circle'>&#10004;</button> :
           <button className='secondBtn' onClick={() => setChecked(prev => !prev)}></button> }
           <button onClick={() => handleRemove(todo.id)}> <img className='delete' src="/assets/delete.svg" alt="" /> </button>
          </div>
 
  )
}

export default Todolist