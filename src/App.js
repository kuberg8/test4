import React from 'react';
import './App.css';

import store from './redux/redux-store.js'
import {Provider} from 'react-redux'
import {connect} from 'react-redux'
import {Route, Switch} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"
import {loginThunkCreator} from './redux/auth-reducer.js'


import HeaderContainer from './components/Header/HeaderContainer.js'
import LoginContainer from './components/Login/LoginContainer.js'

import SearchContainer from './components/Search/SearchContainer.js'
import FavoritesContainer from './components/Favorites/FavoritesContainer.js'


function App(props) {
	if (localStorage.length != 0) {
		props.loginThunkCreator()

		if(!props.isAuth) {
			return (
				<span>
					Loading...
				</span> 
			)
		}
	}


  return (
	<div className='content'>
	  <HeaderContainer />
	  <span className='container'>
	    <Switch>
			<Route exact path="/search" render={ () => <SearchContainer />} />

			<Route exact path="/favorites" render={ () => <FavoritesContainer />} />

			<Route exact path="/login" render={ () => <LoginContainer />} />

		    <Route exact path="/" render={ () => <SearchContainer />} />
	    </Switch>			  
	  </span>	  	
	</div>
  );
}






let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth
	}
}




let AppContainer = connect(mapStateToProps, {loginThunkCreator})(App)



let MainApp = (props) => {
	return(
	  	<Provider store={store}>
	  		<BrowserRouter basename={process.env.PUBLIC_URL}>
		    	<AppContainer />
		    </BrowserRouter>
		</Provider>
	)
}

export default MainApp;
