import React, {useState, useEffect} from 'react';
import lg from './modal.module.css';
import {Field, reduxForm} from 'redux-form'
import {required, maxLengthCreator} from '../../utils/validators.js'
import {Input} from '../common/FormsControls/FormsControls.js'




let maxLength = maxLengthCreator(12)



function ModalForm(props) {
	return (
		<form onSubmit={props.handleSubmit}>
			<div className={lg.input}>
				<span>Запрос</span>
				<Field 
					placeholder={props.searchName}
					name="request"
					component={Input} />
			</div>
			<div  className={lg.input}>
				<span><b>*</b>Название</span>
				<Field 
					placeholder="Укажите название" 
					name="nameRequest" 
					component={Input}
					validate={required} />
			</div>
			<div  className={lg.input}>
				<span>Максимальное количество</span>
				<span className={lg.range}>
				1
				<Field 
					type='range'
					min="1" 
					max="12"
					step="1"
					name="maxLength" 
					component='input' />
				12
				</span>
			</div>

			<div className={lg.button}>
				<button onClick={() => {
					props.nameMode ? props.setSaveMode(false) : props.setEditMode(false)
				}}>{props.nameMode === 'Сохранить' ? 'Не сохранять' : 'Не изменять'}</button>
				<button>{props.nameMode ? 'Сохранить' : 'Изменить'}</button>
			</div>

		</form>		
	)
}


const ModalReduxForm = reduxForm({
	form: 'modal'
})(ModalForm)






function Modal(props) {	
	const onSubmitSave = ({request = props.searchName, nameRequest, maxLength = 7}) => {
		props.setSaveMode(false)
		props.saveSearchName(request, nameRequest, maxLength)
	}	

	const onSubmitChange = ({request = props.searchName, nameRequest, maxLength = 7}) => {
		props.setEditMode(false)
		props.changeSearchName(request, nameRequest, maxLength, props.indexRequest)
	}	


	return (
		<div className={lg.login}>
			<div className={lg.reg}>
				<h2>{props.nameMode ? props.nameMode : 'Изменить'} запрос</h2>
				<ModalReduxForm 
					onSubmit={props.nameMode ? onSubmitSave : onSubmitChange}
					searchName={props.searchName}
					nameMode={props.nameMode}
					setSaveMode={props.setSaveMode}
					setEditMode={props.setEditMode} />
			</div>
		</div>
	)
}

export default Modal;