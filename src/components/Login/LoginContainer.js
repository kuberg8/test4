import React from 'react';

import {loginThunkCreator} from '../../redux/auth-reducer.js'
import Login from './Login.js'

import {connect} from 'react-redux'


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		login: (login, password) => { dispatch( loginThunkCreator(login, password) ) },
	}
}


const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);


export default LoginContainer