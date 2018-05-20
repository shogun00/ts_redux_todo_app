import { reducerWithInitialState } from 'typescript-fsa-reducers'
import * as todoActions from '../actions/todo'

interface ITask {
  id: number
  text: string
  done: boolean
}

export interface ITodoState {
  tasks: ITask[]
}

const initialState: ITodoState = {
  tasks: [
    {
      done: false,
      id: 1,
      text: 'initial task'
    }
  ]
}

let idCounter: number = 1

const buildTask = (text: string): ITask => ({
  done: false,
  id: ++idCounter,
  text
})

export default reducerWithInitialState(initialState)
  .case(todoActions.addTodo, (state: ITodoState, payload) => ({
    ...state,
    tasks: state.tasks.concat(
      buildTask(payload)
    )
  }))
  .build()
