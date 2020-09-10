import React, {useState} from 'react';
import sr from './search.module.css';
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'
import Modal from '../Modal/Modal.js'

import heart from '../assets/img/heart.svg'
import video from '../assets/img/Video.png'
import list from '../assets/img/list.svg'
import grid from '../assets/img/grid.svg'


function SearchForm(props) {
	return (
		<form onSubmit={props.handleSubmit} className={sr.form}>
			<span className={sr.input}>
				<Field 
					placeholder="Что хотите посмотреть?"
					name="search"
					component="input"
					autocomplete="off" />
				{props.searchName ? 
					<img 
						src={heart}
						onClick={() => {
							props.setSaveMode(true)
						}} /> : 
					null
				}	
			</span>
			<button>Найти</button>			
		</form>		
	)
}


const SearchReduxForm = reduxForm({
	form: 'Search'
})(SearchForm)





function Search(props) {
	let [sortName, setSortName] = useState('list')
	let [saveMode, setSaveMode] = useState(false)


	if(props.isAuth === false) {
		return	<Redirect to={"/login"} />
	}
		

	const onSubmit = (formData) => {
		if (!formData.search) {
			return
		}
		props.getSearchData(formData.search)
	}	


	let searchData = props.searchData.map( item => {
		return (
			<div className={sortName === 'list' ? sr.flex : sr.box}>
				<img src={item.snippet.thumbnails ? sortName === 'list' ? item.snippet.thumbnails.default.url : item.snippet.thumbnails.high.url : video} />
				<span className={sr.title}>
					<h3>{item.snippet.title}</h3>
					<span className={sr.subtitle}>
						<div>{item.snippet.channelTitle}</div>
						<div>Опубликовано: {item.snippet.publishTime.slice(0,10)}</div>
					</span>
				</span>
			</div>
		)
	})



	return (
		<div className={props.searchData.length === 0 ? sr.content + " " +  sr.algin : sr.content}>
			<h1>Поиск видео</h1>
			<SearchReduxForm 
				onSubmit={onSubmit} 
				searchName={props.searchName}
				setSaveMode={setSaveMode} />
			
			{props.searchName ? 
				<h2 className={sr.info}>
					<span>
						Видео по запросу "{props.searchName}" 
						<span className={sr.subtitle}> {props.totalResults}</span>
					</span>
					<span className={sr.typeList}>
						<img src={list} onClick={() => {
							setSortName('list')
						}} />
						<img src={grid} onClick={() => {
							setSortName('grid')
						}} />
					</span>					
				</h2> : 
				null
			}
			
			<span className={sr.searchData}>
				{searchData}
			</span>

			{props.totalResults === 0 ? "Нет результатов" : null}


			{saveMode ? <Modal 
				saveSearchName={props.saveSearchName}
				searchName={props.searchName}
				setSaveMode={setSaveMode}
				nameMode='Сохранить' /> : null}
		</div>
	)
}

export default Search;