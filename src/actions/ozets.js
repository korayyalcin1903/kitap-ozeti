import database from "../firebase/firebaseConfigure"
import { child, get, push, ref } from "firebase/database"

export const addOzet = (ozet) =>({
    type: 'ADD_OZET',
    ozet
})

export const addOzetToDatabase = (data = {}) => {
    console.log(data)
    return (dispatch, getState) => {
        const {name='', author='', description='', image='', category=''} = data
        const ozet = {name,author,description,image, category}

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
    return (dispatch, getState) => {

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