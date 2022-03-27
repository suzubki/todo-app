import React, { useState } from 'react'
import { Form, Input, Button } from 'reactstrap'

const FormTask = ({ addTask, className }) => {
  const [task, setTask] = useState({ name: '', description: '' })

  const handleSubmit = (ev) => {
    ev.preventDefault()

    // Validación de campos vacíos
    if (task.name === '' && task.description === '') return

    // Agregamos la tarea, establecemos el id(key)
    addTask({
      name: task.name.trim(),
      description: task.description.trim(),
      id: new Date().getTime()
    })
    //  Limpieza de los input
    setTask({
      name: '',
      description: ''
    })
  }

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    })
  }

  return (
    <Form onSubmit={handleSubmit} className={className} >
      <h2 className='mb-4 text-white'>Crea una nueva tarea</h2>
      <Input
      className='mt-2 mb-2'
      name="name"
      type='text'
      value={task.name}
      placeholder="Tarea por realizar"
      onChange={handleChange}
      />
      <Input
        className='mt-4 mb-4 textarea--height'
        style={{ height: '350px' }}
        type="textarea"
        name="description"
        value={task.description}
        placeholder="Agregue más información"
        onChange={handleChange}
      />
      <Button className='w-100' size='lg' color="primary">Agregar tarea</Button>
    </Form>
  )
}

export default FormTask
