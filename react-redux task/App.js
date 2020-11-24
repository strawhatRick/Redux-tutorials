import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CakeContainer from './components/CakeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
      <div className='App'>
        <CakeContainer />
      </div>
      </Provider>
    </>
  )
}

export default App;
