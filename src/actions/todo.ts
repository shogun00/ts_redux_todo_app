import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()

export const addTodo = actionCreator<string>('ADD_TODO')
export const deleteTodo = actionCreator<number>('DELETE_TODO')
export const updateDoneTodo = actionCreator<number>('UPDATE_DONE_TODO')
