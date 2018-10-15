import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { Actions } from 'react-native-router-flux';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA05IYlxZ7J6h6Pt4NPQCoxmKjrL5-a3gU',
      authDomain: 'manager-9beaa.firebaseapp.com',
      databaseURL: 'https://manager-9beaa.firebaseio.com',
      projectId: 'manager-9beaa',
      storageBucket: 'manager-9beaa.appspot.com',
      messagingSenderId: '345519302485'
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        Actions.main({ type: 'reset' });
      }
    });
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
