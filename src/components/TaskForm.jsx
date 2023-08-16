import React, { useEffect } from 'react';
import { BsGit } from 'react-icons/bs';
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TaskForm = ({
  task,
  setTask,
  allTasks,
  setAllTasks,
  isEdit,
  setIsEdit,
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
  return (
    <div>
      <div>
        <h1 className='text-5xl my-5'>To do list</h1>
      </div>
      <div>
        <form onSubmit={handleFormSubmit}>
          <input
            type='text'
            placeholder='Enter the task...'
            value={task}
            required
            onChange={e => setTask(e.target.value)}
          />
          <button type='submit'>{isEdit ? 'Update task' : 'Add task'}</button>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;