import React, { useEffect } from 'react';
import bgdesktopdark from './../assets/bg-desktop-dark.jpg';
import bgdesktoplight from './../assets/bg-desktop-light.jpg';

import { BsGit } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';

uuidv4();
const IconSun = (
  <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26'>
    <path
      fill='#FFF'
      fill-rule='evenodd'
      d='M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z'
    />
  </svg>
);
const iconMoon = (
  <svg xmlns='http://www.w3.org/2000/svg' width='26' height='26'>
    <path
      fill='#FFF'
      fill-rule='evenodd'
      d='M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z'
    />
  </svg>
);

const TaskForm = ({
  task,
  setTask,
  allTasks,
  setAllTasks,
  isEdit,
  setIsEdit,
  isDark,
  setIsDark,
}) => {
  const updateTask = (title, id, completed) => {
    setAllTasks(
      allTasks.map(oneTask =>
        oneTask.id === id ? { title, id, completed } : oneTask
      )
    );
    setIsEdit('');
    setTask('');
  };
  useEffect(() => {
    if (isEdit) {
      setTask(isEdit.title);
    }
  }, [isEdit]);

  const handleFormSubmit = e => {
    e.preventDefault();
    if (!isEdit) {
      setAllTasks([
        ...allTasks,
        { title: task, id: uuidv4(), completed: false },
      ]);
      setTask('');
    } else {
      updateTask(task, isEdit.id, isEdit.completed);
    }
  };
  const toggleDarkLightMode = () => {
    setIsDark(prev => !prev);
  };
  return (
    <div className='w-full text-white '>
      <div className=''>
        <img
          src={bgdesktoplight}
          alt=''
          className={`${
            isDark ? 'hidden' : ''
          } lg:h-full sm:h-[200px]`}
        />
        <img
          src={bgdesktopdark}
          alt=''
          className={`${
            isDark ? '' : 'hidden'
          } lg:h-full sm:h-[200px]`}
        />
      </div>
      <div className='relative lg:w-[700px] sm:w-[330px] mx-auto lg:-mt-[280px] sm:-mt-[150px]'>
        <div className='flex items-center justify-between'>
          <h1 className='lg:text-5xl sm:text-2xl lg:my-9 sm:mb-5'>
            T O D O
          </h1>
          <div onClick={toggleDarkLightMode}>
            <span className={`${isDark ? '' : 'hidden'}`}>{IconSun}</span>
            <span className={`${isDark ? 'hidden' : ''}`}>{iconMoon}</span>
          </div>
        </div>

        <form className='' onSubmit={handleFormSubmit}>
          <div
            className={`${
              isDark ? 'bg-[#494C6B]' : 'bg-[#fcfcfd] text-black'
            } flex justify-between lg:p-4 lg:px-6 sm:p-3 sm:px-3 rounded-lg w-full lg:w-full sm:w-[330px]`}
          >
            <input
              className={`${
                isDark ? 'bg-[#494C6B]' : 'bg-[#fcfcfd] text-black'
              } focus:outline-none`}
              type='text'
              placeholder='Enter the task...'
              value={task}
              required
              onChange={e => setTask(e.target.value)}
            />
            <button type='submit'>{isEdit ? 'Update task' : 'Add task'}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;
