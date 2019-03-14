import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';


export default class App extends Component {
	
	componentWillMount() {
		  let config = {
		    apiKey: "AIzaSyD1jgb66Ehv2WMnvUDIUCvD3Mk0x__Tq-U",
		    authDomain: "mercury-database-79075.firebaseapp.com",
		    databaseURL: "https://mercury-database-79075.firebaseio.com",
		    projectId: "mercury-database-79075",
		    storageBucket: "mercury-database-79075.appspot.com",
		    messagingSenderId: "1072436355753"
		  };
		  firebase.initializeApp(config);		
	}

	render(){
		return(
			<Provider store={ createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
				<Routes /> 
			</Provider>	
		);
	}
}

