import * as React from 'react'
import { Dispatch } from 'redux'
import { addTodo, deleteTodo, updateDoneTodo } from '../actions/todo'
import { ITodoState } from '../reducers/todo'

interface IProps extends ITodoState {
  dispatch: Dispatch<any>
}

interface IState {
  text: string
}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      text: '',
    }
  }

  public addTodo = () => {
    this.props.dispatch(addTodo(this.state.text))
  }

  public renderDoneBtn = (taskId: number) => (
    <button
      onClick={() => {
        this.props.dispatch(updateDoneTodo(taskId))
      }}
    >
      DONE
    </button>
  )

  public renderDeleteBtn = (taskId: number) => (
    <button
      onClick={() => {
        this.props.dispatch(deleteTodo(taskId))
      }}
    >
      DELETE
    </button>
  )

  public renderDone = (done: boolean) => (done ? <span>done!</span> : null)

  public renderTodoList = () =>
    this.props.tasks.map(task => (
      <li key={task.id.toString()}>
        <span>{task.id}</span>
        <span>{task.text}</span>
        {this.renderDeleteBtn(task.id)}
        {this.renderDoneBtn(task.id)}
        {this.renderDone(task.done)}
      </li>
    ))

  public handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.currentTarget.value })
  }

  public handleClick = () => {
    this.addTodo()
  }

  public render() {
    return (
      <section style={{ width: '500px', margin: '0 auto' }}>
        <h1>MY TODO LIST</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>ADD TODO</button>
        <ul>{this.renderTodoList()}</ul>
      </section>
    )
  }
}
