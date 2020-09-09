const SAVE_NAME = "SAVE-NAME"
const CHANGE_NAME = "CHANGE-NAME"


let initialState = {
	favoritesData:[],
}


function favoritesReducer(state = initialState, action) {

	if(action.type === SAVE_NAME) {
		if (state.favoritesData.some(item => item.name.toLowerCase() === action.data.name.toLowerCase())) {
			alert('Запрос с таким именем уже существует.\nСделайте новый запрос.')
			return state
		}
		alert('Запрос сохранен!')
		return {
			...state,
			favoritesData: [...state.favoritesData, action.data],
		}
	} else if (action.type === CHANGE_NAME) {
		let changeArr = [...state.favoritesData]
		changeArr[action.data.index] = {request: action.data.request, name: action.data.name, amount: action.data.amount}
		return {
			...state,
			favoritesData: [...changeArr],			
		}
	}

	return state;
}




export function saveSearchNameAC (request, name, amount) {
	return {
		type: SAVE_NAME,
		data: {request, name, amount}
	}
}

export function changeSearchNameAC (request, name, amount, index) {
	return {
		type: CHANGE_NAME,
		data: {request, name, amount, index}
	}
}




export default favoritesReducer;