import React, { useState } from 'react';
import './todos.css';
import Todolist from '../Todolist';

const Todos = () => {
  const [todos, setTodos] = useState<{ id: number; title: string }[]>([]);
  const [activeTodo, setActiveTodo] = useState<{ id: number; title: string }>({ id: 0, title: '' });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (activeTodo.title.trim() !== '') {
      setTodos((prevTodos) => [...prevTodos, { id: todos.length, title: activeTodo.title }]);
      setActiveTodo({ id: todos.length + 1, title: '' });
    }
  };

  const handleRemove = (todoId:number) => {
    const filterTodos = todos.filter(({id})=> todoId !== id)
    console.log(filterTodos)
    setTodos(filterTodos)
  }

  return (
    <div className='todoDiv'>
      <div className='box'>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            onChange={(e) => setActiveTodo({ id: activeTodo.id, title: e.target.value })}
            type='text'
            value={activeTodo.title}
            placeholder='✔  NOTE'
            maxLength={10}
          />
          <button type='submit' className='grndiv' disabled={!activeTodo.title.trim()}>
            ✛
          </button>
        </form>

        <div className='todotext'>
          {todos.map((todo) => (
            <Todolist todo={todo} key={todo.id} handleRemove={handleRemove} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Todos;
