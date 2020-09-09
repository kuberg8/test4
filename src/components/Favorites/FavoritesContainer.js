import React from 'react';
import Favorites from './Favorites.js'
import {connect} from 'react-redux'
import {getSearchDataThunkCreator} from '../../redux/search-reducer.js'
import {changeSearchNameAC} from '../../redux/favorites-reducer.js'


let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		favoritesData: state.favorites.favoritesData
	}
}

let mapDispatchToProps = (dispatch) => {
	return {	
		setSearchData: (name, amount) => { dispatch( getSearchDataThunkCreator(name, amount) ) },
		changeSearchName: (request, name, amount, index) => { dispatch( changeSearchNameAC(request, name, amount, index) ) },
	}
}


const FavoritessContainer = connect(mapStateToProps, mapDispatchToProps)(Favorites);

export default FavoritessContainer