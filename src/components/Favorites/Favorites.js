import React, {useState} from 'react';
import fv from './Favorites.module.css';
import {Redirect} from 'react-router-dom'
import {NavLink} from 'react-router-dom'
import Modal from '../Modal/Modal.js'




function Favorites(props) {
	let [editMode, setEditMode] = useState(false)
	let [itemRequest, setItemRequest] = useState('')
	let [indexRequest, setIndexRequest] = useState(null)

	if(props.isAuth === false) {
		return	<Redirect to={"/login"} />
	}

	let favoritesData = props.favoritesData.map( (item, index) => {
		return (
			<b className={fv.item}>
				<span>{item.name}</span>
				<span>
					<NavLink to="/search" onClick={() =>{
						props.setSearchData(item.request, item.amount)
					}}>Выполнить
					</NavLink>
					<button onClick={() =>{
						setItemRequest(item.request)
						setIndexRequest(index)
						setEditMode(true)
					}}>
						<b>Редактировать</b>
					</button>
				</span>
			</b>
		)
	})

	return (
		<div className={fv.content}>
			<h1>Избранное</h1>
			{favoritesData}
			{editMode ? <Modal 
				setEditMode={setEditMode}
				searchName={itemRequest}
				indexRequest={indexRequest}
				changeSearchName={props.changeSearchName} /> : null}
		</div>
	)
}

export default Favorites;