import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import CakeContainer from './components/CakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

const App = () => {
  return (
    <>
      <Provider store={store}>
      <div className='App'>
        <HooksCakeContainer />
        <CakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer />
      </div>
      </Provider>
    </>
  )
}

export default App;
