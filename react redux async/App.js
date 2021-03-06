import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import HooksIceCreamContainer from './components/HooksIceCreamContainer';
import { Provider } from 'react-redux';
import store from './redux/store';
import UserContainer from './components/UserContainer';

const App = () => {
  return (
    <>
      <Provider store={store}>
      <div className='App'>
        {/* <ItemContainer cake />
        <ItemContainer />
        <NewCakeContainer />
        <IceCreamContainer />
        <HooksIceCreamContainer /> */}
        <UserContainer />
      </div>
      </Provider>
    </>
  )
}

export default App;
