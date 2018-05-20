import * as React from 'react'
import { Dispatch } from 'redux'
import { addTodo } from '../actions/todo'
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

  public renderTodoList = () =>
    this.props.tasks.map(task => <li key={task.id.toString()}>{task.text}</li>)

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
