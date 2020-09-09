import React from 'react';
import Search from './Search.js'
import {connect} from 'react-redux'
import {getSearchDataThunkCreator} from '../../redux/search-reducer.js'
import {saveSearchNameAC} from '../../redux/favorites-reducer.js'

let mapStateToProps = (state) => {
	return {
		isAuth: state.auth.isAuth,
		searchData: state.search.searchData,
		totalResults: state.search.totalResults,
		searchName: state.search.searchName,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		getSearchData: (name, amount) => { dispatch( getSearchDataThunkCreator(name, amount) ) },
		saveSearchName: (request,name, amount) => { dispatch( saveSearchNameAC(request, name, amount) ) }
	}
}


const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);


export default SearchContainer