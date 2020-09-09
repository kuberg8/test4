export function required(value) {
	if(value) {
		return undefined
	} else {
		return 'Обязательно для заполнения'		
	}	
}



export const maxLengthCreator = (maxLength) => (value) => {
	if(value.length > maxLength) {
		return `Max length is ${maxLength} symbols`
	} else {
		return undefined		
	}	
}