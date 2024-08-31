const categoryState = []

export const categoryReducer = (state = categoryState, action) => {
    switch (action.type){
        case 'ADD_CATEGORY':
            return [...state, action.category]
        case 'LIST_CATEGORY':
            return action.categories
        default:
            return state
    }
}