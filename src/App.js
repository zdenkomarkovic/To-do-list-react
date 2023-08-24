import React, { useEffect } from 'react';
import { useState } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
  const initialState = JSON.parse(localStorage.getItem('todo_list')) || [];
  const [task, setTask] = useState('');
  const [allTasks, setAllTasks] = useState(initialState);
  const [isEdit, setIsEdit] = useState(null);
  const [isDark, setIsDark] = useState('false')
  useEffect(() => {
    localStorage.setItem('todo_list', JSON.stringify(allTasks));
  }, [allTasks]);
  return (
    <div className='lg:w-[1440px] sm:w-[375px] mx-auto lg:mt-10 lg:text-2xl sm:text-sm'>
      <TaskForm
        task={task}
        setTask={setTask}
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
        isDark={isDark}
        setIsDark={setIsDark}
      />
      <TaskList
        allTasks={allTasks}
        setAllTasks={setAllTasks}
        setTask={setTask}
        setIsEdit={setIsEdit}
        isDark={isDark}
        setIsDark={setIsDark}
      />
    </div>
  );
}

export default App;
