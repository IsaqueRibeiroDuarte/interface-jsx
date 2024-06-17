import React, { useState } from 'react';
import TaskTable from '../src/components/TaskTable';
import Modal from '../src/components/Modal';
import '../src/styles/main.scss';

const App = () => {
  const [modal, setModal] = useState({ show: false, mode: '', taskIndex: null, taskName: '' });
  const [tasks, setTasks] = useState([]);

  const openModal = (index, mode, name) => {
    setModal({ show: true, mode, taskIndex: index, taskName: name });
  };

  const closeModal = (confirm, taskName) => {
    if (confirm) {
      if (modal.mode === 'edit') {
        handleEditTask(modal.taskIndex, taskName);
      } else if (modal.mode === 'delete') {
        handleDeleteTask(modal.taskIndex);
      }
    }
    setModal({ show: false, mode: '', taskIndex: null, taskName: '' });
  };

  const handleEditTask = (index, newName) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, name: newName } : task
    );
    setTasks(updatedTasks);
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className={`app ${modal.show ? 'modal-active' : ''}`}>
      <nav className="menu">
        <ul>
          <li className='organization'>Organização</li>
          <li className='tasks'>Tarefas</li>
        </ul>
      </nav>
      <TaskTable tasks={tasks} setTasks={setTasks} openModal={openModal} />
      <Modal modal={modal} closeModal={closeModal} />
    </div>
  );
};

export default App;