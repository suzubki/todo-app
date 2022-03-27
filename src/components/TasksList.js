import React, { } from 'react'
import Task from './Task'
import { List } from 'reactstrap'

const TasksList = ({ tasksToDo, removeTask, editTask }) => {
  return (
        <List type='unstyled'>
        {
            tasksToDo &&
            tasksToDo.map((task, i) => (
            <li key={`list-${i}`} className='bg-light mt-2 p-2 rounded' >
              <Task
                key={task.id}
                id={task.id}
                name={task.name}
                description={task.description}
                removeTask={() => removeTask(task.id)}
                editTask={editTask}
              />
            </li>))
        }
        </List>
  )
}

export default TasksList
