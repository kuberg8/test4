import React from 'react';

import {setAuthAC} from '../../redux/auth-reducer.js'
import Header from './Header.js'
import {connect} from 'react-redux'



let mapStateToProps = (state) => {
    return {
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    	logout: (isAuth) => { dispatch( setAuthAC(isAuth) ) }
    }
}



const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);


export default HeaderContainer;