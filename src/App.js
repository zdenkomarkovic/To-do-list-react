import React, { useEffect } from 'react';
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('todo_list')) || [];
  const [task, setTask] = useState('');
  const [allTasks, setAllTasks] = useState(initialState);
  const [isEdit, setIsEdit] = useState(null);
  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(allTasks));
  }, [allTasks]);
  return (
    <div className='w-[80%] mx-auto mt-10 text-2xl'>
      <TaskForm
        task={task}
        setTask={setTask}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
      <TaskList
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        setTask={setTask}
        setIsEdit={setIsEdit}
      />
    </div>
  );
}

export default App;
