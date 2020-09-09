import {seachAPI} from '../api/api.js' 


const SET_SEARCH_DATA = "SET-SEARCH-DATA"
const SET_SEARCH_NAME = "SET-SEARCH-NAME"


let initialState = {
	searchData:[],
	totalResults: null,
	searchName: false,
}


function searchReducer(state = initialState, action) {


	if(action.type === SET_SEARCH_DATA) {
		return {
			...state,
			searchData: [...action.data.SearchData],
			totalResults: action.data.totalResults
		}
	} else if(action.type === SET_SEARCH_NAME) {
		return {
			...state,
			searchName: action.name
		}
	} 

	return state;
}




export function setSearchDataAC (SearchData, totalResults) {
	return {
		type: SET_SEARCH_DATA,
		data: {SearchData, totalResults}
	}
}

function setSearchNameAC (name) {
	return {
		type: SET_SEARCH_NAME,
		name
	}
}


export const getSearchDataThunkCreator = (searchName, amount) => {
	return async (dispatch) => {
		try {
			let response = await seachAPI.getSearch(searchName, amount)
			dispatch( setSearchDataAC(response.data.items, response.data.pageInfo.totalResults) ) 
			dispatch( setSearchNameAC(searchName) )  		
		} catch {
			alert('Слишком много запросов на сегодня. \nУстанавливаю фейковый массив.')
			dispatch( setSearchDataAC([
				{snippet: {title:"example", publishTime: '21-21-2121'}},
				{snippet: {title:"example", publishTime: '21-21-2121'}},
				{snippet: {title:"example", publishTime: '21-21-2121'}},
				{snippet: {title:"example", publishTime: '21-21-2121'}},
				{snippet: {title:"example", publishTime: '21-21-2121'}},
				{snippet: {title:"example", publishTime: '21-21-2121'}},
				{snippet: {title:"example", publishTime: '21-21-2121'}},
				{snippet: {title:"example", publishTime: '21-21-2121'}}				
			]) )
			dispatch( setSearchNameAC(searchName) )	
		}

	}
}




export default searchReducer;