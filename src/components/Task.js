/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Input, Button, ButtonGroup, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const Task = ({ name, description, removeTask, editTask }) => {
  // activar el Modal de reactstrap
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)

  // Definiendo la tarea dentro del TaskModal
  const [taskModal, setTaskModal] = useState({
    nameTaskModal: name.trim(),
    descriptionTaskModal: description.trim()
  })
  // Estableciendo el onChange de los inputs
  const handleChange = (e) => {
    setTaskModal({
      ...taskModal,
      [e.target.name]: e.target.value
    })
  }

  // Destructuración taskModal
  const { nameTaskModal, descriptionTaskModal } = taskModal

  return (
    <>
      <div className='d-flex row justify-content-between mx-0 align-items-center'>
        {/* Name Task */}
        <div className='col-6 p-0'>
          <h4 className="mb-0" style={{ overflow: 'auto hidden', wordBreak: 'break-all' }} >{name}</h4>
        </div>

        {/* Button Group Task */}
        <ButtonGroup className="col-6 gap-2 gap-sm-1 gap-md-3" style={{ height: '100%' }}>
          <Button
            color="warning"
            className="btn-sm text-white"
            onClick={() => {
              toggle()
            }} >
            Editar
          </Button>
          <Button
            className='btn-sm'
            onClick={removeTask}
            color="danger"
          >
            Eliminar
          </Button>

          {/* Modal */}
          <Modal
            isOpen={modal}
            toggle={toggle}
            centered={true}>
            <ModalHeader toggle={toggle}>
              Editar tarea
            </ModalHeader>
            <ModalBody>
              <Input
                name='nameTaskModal'
                value={nameTaskModal}
                onChange={handleChange}
              />
              <Input
                className='mt-4'
                name='descriptionTaskModal'
                type='textarea'
                value={descriptionTaskModal}
                onChange={handleChange}
              />
            </ModalBody>
            <ModalFooter>
              <Button
                color="primary"
                onClick={() => {
                  toggle()
                  editTask({ name, description }, { nameTaskModal, descriptionTaskModal })
                }}
              >
                Editar
              </Button>
              {' '}
              <Button onClick={toggle}>
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
          {/* Modal */}

        </ButtonGroup>

      </div>
      {/* Description Task */}
      <div className="mt-1"><p className="text-break mb-1" >{description}</p></div>
    </>
  )
}

export default Task
