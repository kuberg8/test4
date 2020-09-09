import {authAPI} from '../api/api.js' 
import {stopSubmit} from 'redux-form'


const SET_AUTH = 'SET-AUTH'



let initialState = {
	isAuth: false,
}


function authReducer(state = initialState, action) {


	if(action.type === SET_AUTH) {		

		return {
			...state,
			isAuth: action.isAuth,
		};

	}

	return state;
}





export function setAuthAC(isAuth) {
	return {
		type: SET_AUTH,
		isAuth

	}
}





export const loginThunkCreator = (login, password) => {
	return async (dispatch) => {
		let response = await authAPI.checkUsers()
		if(response.data.some(item => item.login === login && item.password === password)) {
			dispatch( setAuthAC(true) )
			localStorage.setItem(login, password);
		} else if (response.data.some(item => item.password === localStorage.getItem(item.login))) {
			dispatch( setAuthAC(true) )
		} else {
			dispatch( stopSubmit("login", {_error: "User is not found"}) )
		}
	}
}



export default authReducer;