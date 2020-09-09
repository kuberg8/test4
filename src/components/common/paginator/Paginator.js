import React, {useState} from 'react';
import pg from './paginator.module.css';


function Paginator(props, portionSize = 3) {

	let pagesCount = Math.ceil(props.buyersData.length / 5)
	let pageMas = []
	for (var i = 1; i <= pagesCount; i++) {
		pageMas.push(i) 
	}


	//let portionCount = Math.ceil(pagesCount / portionSize)
	//let [portionNumber, setPortionNumber] = useState(1)
	//let leftPageNumber = (portionNumber - 1) * portionSize + 1
	//let rightPageNumber = portionNumber * portionSize



    return (
		<div className={pg.pagination}>
			{pageMas.map(item => {
				return (
					<span 
					onClick={() => { 
						props.changePage(item)
						props.setPortionNumber(item)
					}} 
					className={props.portionNumber === item ? pg.pagination_item + " " + pg.active :
					 pg.pagination_item}>{item}</span>
				)
			})}
		</div>
    )
}

export default Paginator