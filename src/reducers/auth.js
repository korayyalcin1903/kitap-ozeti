const authState = {}

const authReducer = (state = authState, action) => {
    switch (action.type){
        case 'LOGIN':
            return { uid: action.uid }
        case 'LOGOUT':
            return {}
        case 'GET_USER':
            return action.user
        default: 
            return state
    }
}

export default authReducer