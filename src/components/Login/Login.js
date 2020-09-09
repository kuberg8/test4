import React, {useState, useEffect} from 'react';
import lg from './login.module.css';
import {Field, reduxForm} from 'redux-form'
import {required} from '../../utils/validators.js'
import {Input} from '../common/FormsControls/FormsControls.js'
import {Redirect} from 'react-router-dom'

import logo from '../assets/img/logo.png'
import eyeOff from '../assets/img/eye-off.svg'
import eyeOn from '../assets/img/eye.svg'






function LoginForm(props) {

	let [showPassword, setShowPassword] = useState(false)

	return (
		<form onSubmit={props.handleSubmit}>
			<div className={lg.input}>
				<span>Логин</span>
				<Field 
					placeholder="Login"
					name="login"
					component={Input}
					validate={required} />
			</div>
			<div  className={lg.input}>
				<span>Пароль</span>
				<Field 
					type={showPassword ? "text" : "password"}
					placeholder="Password" 
					name="password" 
					component={Input}
					validate={required} />
				<img src={showPassword ? eyeOn : eyeOff} onClick={() => {
					setShowPassword(showPassword ? false : true)
				}} />
			</div>
			{props.error ?
				<div className={lg.error}>
					{props.error}
				</div>
				: <span></span>}


			<div>
				<button>Login</button>
			</div>

		</form>		
	)
}


const LoginReduxForm = reduxForm({
	form: 'login'
})(LoginForm)






function Login(props) {	
	if(props.isAuth) {
		return	<Redirect to={"/search"} />
	}

	const onSubmit = (formData) => {
		props.login(formData.login, formData.password)
	}	


	return (
		<div className={lg.login}>
			<div className={lg.reg}>
				<img src={logo} />
				<h2>Вход</h2>
				<LoginReduxForm onSubmit={onSubmit} />
			</div>
		</div>
	)
}

export default Login;