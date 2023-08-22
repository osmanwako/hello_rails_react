import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './src/components/greeting';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App() {

  return (
    <Provider store={store}>
      <Greeting />
    </Provider>);
}

ReactDOM.render(<App />, document.getElementById('root'));