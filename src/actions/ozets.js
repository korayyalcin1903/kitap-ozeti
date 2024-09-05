import database from "../firebase/firebaseConfigure"
import { child, get, push, ref, remove, update } from "firebase/database"

export const addOzet = (ozet) =>({
    type: 'ADD_OZET',
    ozet
})

export const addOzetToDatabase = (data = {}) => {
    return (dispatch, getState) => {
        const uid = localStorage.getItem('userid')
        const {name='', author='', description='', image='', category=''} = data
        const ozet = {name,author,description,image, category, uid}

        push(ref(database, 'ozets'), ozet).then((res) => {
            dispatch(addOzet({
                id:res.key,
                ...ozet
            }))
        })
    }
}

export const listOzets = (ozets) => ({
    type: 'LIST_OZETS',
    ozets
})

export const getOzetsFromDatabase = () => {
    return (dispatch) => {
        return get(child(ref(database), "/ozets"))
            .then((snapshot) => {
                const ozets = []

                snapshot.forEach((ozet) => {
                    const result = ozet.val()
                    ozets.push({
                        id: ozet.key,
                        ...result
                    })
                })
                dispatch(listOzets(ozets))
            })
    }
}

export const filterUserOzet = (ozets) => ({
    type: 'FILTER_USER_OZET',
    ozets
})

export const filterUserOzetToDatabase = (userid) => {
    return (dispatch) => {
        return get(child(ref(database), `/ozets`))
                .then((snapshot) => {
                    const ozets = []
                    
                    snapshot.forEach((ozet) => {
                        const result = ozet.val()
                        if(result.uid === userid){
                            ozets.push({
                                id: ozet.key,
                                ...result
                            })
                        }
                    })
                    dispatch(filterUserOzet(ozets))
                })
    }
}

export const filterCategoryOzet = (ozets) => ({
    type: 'FILTER_CATEGORY_OZET',
    ozets
})

export const filterCategoryOzetToDatabase = (category_id) => {
    return (dispatch) => {
        return get(child(ref(database), `/ozets`))
                .then((snapshot) => {
                    const ozets = []
                    
                    snapshot.forEach((ozet) => {
                        const result = ozet.val()
                        if(result.category === category_id){
                            ozets.push({
                                id: ozet.key,
                                ...result
                            })
                        }
                    })
                    dispatch(filterCategoryOzet(ozets))
                })
    }
}

export const filterOzet = (ozets) => ({
    type: 'FILTER_OZET',
    ozets
})

export const filterOzetToDatabse = (id) => {
    return (dispatch) => {
        return get(child(ref(database), `/ozets/${id}`))
                .then((snapshot) => {
                    const result = snapshot.val()
                    dispatch(filterOzet(result))
                    return result
                })
    }
}

export const editOzet = (id, updates) => ({
    type: "EDIT_OZET",
    id,
    updates
})

export const editOzetToDatabase = (id, updates) => {
    return (dispatch) => {
        return update(ref(database, `/ozets/${id}`), updates)
                .then(() => {
                    dispatch(editOzet(id, updates))
                })
    }
}

export const removeOzet = (id) => ({
    type: 'REMOVE_OZET'
})

export const removeOzetFromDatabase = (id) => {
    return (dispatch) => {
        return remove(ref(database, `/ozets/${id}`))
                .then(removeOzet(id))
    }
}

export const listCategoryOzets = (ozets) => ({
    type: 'LIST_CATEGORY_OZETS',
    ozets
})

export const getCategoryFromDatabase = (category_id) => {
    return (dispatch) => {
        return get(child(ref(database), "/ozets"))
            .then((snapshot) => {
                const ozets = []

                snapshot.forEach((ozet) => {
                    const result = ozet.val()
                    if(result.category === category_id){
                        ozets.push({
                            id: ozet.key,
                            ...result
                        })
                    }
                })
                dispatch(listCategoryOzets(ozets))
            })
    }
}