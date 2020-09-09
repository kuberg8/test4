import React from 'react'
import fm from './formsControls.module.css'


export function Input({input, meta, ...props}) {

	let hasError = meta.touched && meta.error && !meta.active
	return(
		<div className={fm.form + " " + (hasError ? fm.error : "")}>
			{hasError ? <span>{meta.error}</span> : <span></span>}
			<div className={meta.active ? fm.focus : ''}>
				<input {...input} {...props} />
			</div>
		</div>
	)
}