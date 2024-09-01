const ozetState = []

const ozetReducer = (state = ozetState, action) => {
    switch (action.type){
        case 'ADD_OZET':
            return [...state, action.ozet]
        case 'REMOVE_OZET':
            return state.filter(({id}) => {
                return id !== action.id
            })
        case 'EDIT_OZET':
            return state.map((ozet) => {
                if(ozet.id === action.id){
                    return { ...ozet, ...action.updates}
                } else{
                    return ozet
                }
            })
        case 'LIST_OZETS':
            return action.ozets
        case 'FILTER_OZET':
            return [action.ozets]
        case 'EDIT_OZET':
            return state.map((ozet) => {
                if(ozet.id === action.id){
                    return {
                        ...ozet,
                        ...action.updates
                    }
                } else {
                    return ozet
                }
            })
        default:
            return state
    }
}

export default ozetReducer