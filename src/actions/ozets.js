import database from "../firebase/firebaseConfigure"
import { child, get, push, ref } from "firebase/database"

export const addOzet = (ozet) =>({
    type: 'ADD_OZET',
    ozet
})

export const addOzetToDatabase = (data = {}) => {
    return (dispatch, getState) => {
        const {name='', author='', description='', image=''} = data
        const ozet = {name,author,description,image}

        push(ref(database), ozet).then((res) => {
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
    return (dispatch, getState) => {

        return get(child(ref(database), "/"))
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