import React, { useReducer } from 'react'
import { taskReducer } from '../helpers/taskReducer'
import FormTask from './FormTask'
import TasksList from './TasksList'

import './Container.css'

function Container () {
  const taskInit = {
    name: 'Proyecto TodoApp',
    description: 'Completar el proyecto ampliará mis conocimientos y uso de Hooks',
    id: 1
  }

  const [tasks, dispatch] = useReducer(taskReducer, [taskInit])

  const addTask = (task) => {
    dispatch({
      type: 'add',
      payload: task
    })
  }

  const removeTask = (id) => {
    dispatch({
      type: 'remove',
      payload: id
    })
  }

  const editTask = (oldTask, newTask) => {
    dispatch({
      type: 'edit',
      payload: { oldTask, newTask }
    })
  }

  return (
    <div className="vh-100 container-fluid d-flex flex-column flex-sm-row align-items-sm-center justify-content-sm-center flex-grow-1 mx-sm-2" style={{ maxWidth: '1440px' }}>
        <FormTask addTask={addTask} className='new-width-container mt-4 p-2 mt-sm-4 border rounded' />
        <div className='container new-width-container mt-3 mx-sm-2 ' style={{ height: '80%', maxHeight: '560px' }} >
          <TasksList
            tasksToDo={tasks}
            removeTask={removeTask}
            editTask={editTask}
          />
        </div>
    </div>
  )
}

export default Container
