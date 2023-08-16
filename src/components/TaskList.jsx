import React from 'react';
import { BsFillTrash3Fill } from 'react-icons/bs';
import { FiEdit3 } from 'react-icons/fi';

const TaskList = ({ allTasks, setAllTasks, setIsEdit }) => {
  const handleDeleteTask = id => {
    setAllTasks(allTasks.filter(task => task.id !== id));
  };
  const handleCompleteTask = id => {
    setAllTasks(
      allTasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleEditTask = id => {
    setIsEdit(allTasks.find(task => task.id === id));
  };
  return (
    <div>
      <div className='mt-7'>
        <ul>
          {allTasks.map((task, i) => {
            if (!task.completed)
              return (
                <li key={i}>
                  <span
                    onClick={() => handleCompleteTask(task.id)}
                    className={`${task.completed ? 'line-through' : ''} mr-4`}
                  >
                    {task.title}
                  </span>{' '}
                  <button onClick={() => handleEditTask(task.id)}>
                    <FiEdit3 />
                  </button>{' '}
                  <button onClick={() => handleDeleteTask(task.id)}>
                    <BsFillTrash3Fill />
                  </button>
                </li>
              );
          })}
        </ul>
      </div>
      <div className='mt-7'>
        <ul>
          {allTasks.map((task, i) => {
            if (task.completed)
              return (
                <li key={i}>
                  <span
                    onClick={() => handleCompleteTask(task.id)}
                    className={`${task.completed ? 'line-through' : ''} mr-4`}
                  >
                    {task.title}
                  </span>{' '}
                  <button onClick={() => handleDeleteTask(task.id)}>
                    <BsFillTrash3Fill />
                  </button>
                </li>
              );
          })}
        </ul>
      </div>
    </div>
  );
};

export default TaskList;
