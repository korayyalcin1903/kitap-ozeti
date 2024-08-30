import database from "../firebase/firebaseConfigure"
import { push, ref } from "firebase/database"

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