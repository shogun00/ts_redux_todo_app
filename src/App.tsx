import * as React from 'react';
import { Provider } from 'react-redux'

import './App.css'

import TodoContainer from './containers/TodoContainer'
import { buildStore } from './store'

class App extends React.Component {
  public render() {
    return (
      <Provider store={buildStore()}>
        <TodoContainer />
      </Provider>
    );
  }
}

export default App;
