export const taskReducer = (state, action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload]

    case 'remove':
      return state.filter(task => task.id !== action.payload)

    case 'edit':
      return state.map(task => {
        const { oldTask, newTask } = action.payload
        console.log(oldTask, newTask)
        if (oldTask.name === task.name && oldTask.description === task.description) {
          task.name = newTask.nameTaskModal
          task.description = newTask.descriptionTaskModal
        }
        return task
      })

    default:
      return state
  }
}
