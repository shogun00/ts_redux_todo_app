import { connect } from 'react-redux'
import Todo from '../components/Todo'
import { ITodoState } from '../reducers/todo'

const mapStateToProps = (state: ITodoState) => state
// const mapDispatchToProps = (dispatch: Dispatch<any>) => ({ dispatch })
const mapDispatchToProps = (dispatch: any) => ({ dispatch })

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
