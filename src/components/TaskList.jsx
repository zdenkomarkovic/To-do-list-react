import React from 'react';

import { CiEdit } from 'react-icons/ci';

const TaskList = ({ allTasks, setAllTasks, setIsEdit, isDark }) => {
  const iconCross = (
    <svg xmlns='http://www.w3.org/2000/svg' width='18' height='18'>
      <path
        fill={`${isDark ? '#ffffff' : '#312929'} `}
        fill-rule='evenodd'
        d='M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z'
      />
    </svg>
  );
  const iconCheck = (
    <svg xmlns='http://www.w3.org/2000/svg' width='11' height='9'>
      <path
        fill='none'
        stroke={`${isDark ? '#ffffff' : '#312929'} `}
        stroke-width='2'
        d='M1 4.304L3.696 7l6-6'
      />
    </svg>
  );

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
    <div
      className={`lg:pb-[150px] sm:pb-[60px] ${
        isDark ? 'bg-[#222761]' : 'bg-[#e9eaef]'
      }  flex flex-col justify-center items-center text-white`}
    >
      <div>
        <div
          className={`mx-auto lg:mt-[25px] sm:mt-[10px] lg:w-[700px] sm:w-[330px] rounded-lg ${
            isDark ? 'bg-[#494C6B]' : 'bg-[#fcfcfd] text-black'
          }`}
        >
          <ul className='lg:w-[700px] sm:w-[330px]'>
            {[...allTasks].reverse().map((task, i) => {
              if (!task.completed)
                return (
                  <li
                    key={i}
                    className='border-b flex items-center justify-between lg:p-4 sm:py-3 sm:px-1 overflow-auto '
                  >
                    {' '}
                    <div className='flex items-center lg:gap-5 sm:gap-2'>
                      <span
                        onClick={() => handleCompleteTask(task.id)}
                        className='border rounded-full flex items-center lg:p-1 sm:p-[2px]'
                      >
                        <span
                          className={`${task.completed ? '' : 'invisible'}`}
                        >
                          {iconCheck}
                        </span>
                      </span>
                      <span
                        className={`${
                          task.completed ? 'line-through' : ''
                        } lg:mr-4 sm:mr-2 w-max-[100px]`}
                      >
                        {task.title}
                      </span>{' '}
                    </div>
                    <span className='flex lg:gap-5 lg:mr-3 sm:gap-2 sm:mr-1 '>
                      <button onClick={() => handleEditTask(task.id)}>
                        <CiEdit />
                      </button>{' '}
                      <button
                        className=''
                        onClick={() => handleDeleteTask(task.id)}
                      >
                        {iconCross}
                      </button>
                    </span>
                  </li>
                );
            })}
          </ul>
        </div>
        <div
          className={`relative mx-auto lg:mt-[25px] sm:mt-[10px] w-full lg:w-[700px] sm:w-[330px] rounded-lg ${
            isDark ? ' bg-[#494C6B]' : 'bg-[#fcfcfd] text-black'
          } `}
        >
          <ul>
            {[...allTasks].reverse().map((task, i) => {
              if (task.completed)
                return (
                  <li
                    key={i}
                    className='border-b flex items-center justify-between lg:p-4 sm:py-3 sm:px-1 overflow-auto '
                  >
                    <div className='flex items-center lg:gap-5 sm:gap-2'>
                      <span
                        onClick={() => handleCompleteTask(task.id)}
                        className='border rounded-full flex items-center lg:p-1 sm:p-[2px] '
                      >
                        <span
                          className={`${task.completed ? '' : 'invisible'}`}
                        >
                          {iconCheck}
                        </span>
                      </span>
                      <span
                        className={`${
                          task.completed ? 'line-through' : ''
                        } lg:mr-4 sm:mr-2`}
                      >
                        {task.title}
                      </span>{' '}
                    </div>
                    <button
                      className='lg:mr-3 sm:mr-1 '
                      onClick={() => handleDeleteTask(task.id)}
                    >
                      {iconCross}
                    </button>
                  </li>
                );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TaskList;
