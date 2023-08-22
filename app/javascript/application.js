import React from 'react';
import ReactDOM from 'react-dom';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Greetings from './src/components/Greetings';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

function App() {
  const router = createBrowserRouter([
    {
      path: '',
      element: <Greetings />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));