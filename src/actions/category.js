import { child, push, ref, get } from "firebase/database"
import database from "../firebase/firebaseConfigure"

export const addCategory = (category) => ({
    type: 'ADD_CATEGORY',
    category
})

export const addCategoryToDatabase = (data = {}) => {
    return (dispatch) => {
        const {name=''} = data
        const category = {name}

        push(ref(database, 'categories'), category).then((res) => {
            dispatch(addCategory({
                ...category
            }))
        })
    }
}

export const listCategory = (categories) => ({
    type: 'LIST_CATEGORY',
    categories
})

export const getCategoryToDatabase = () => {
    return (dispatch) => {
      return get(child(ref(database), '/categories')).then((snapshot) => {
        const categories = []
  
        snapshot.forEach((category) => {
          const result = category.val()

          categories.push({ 
            id: category.key,
            ...result 
        })
        })
  
        dispatch(listCategory(categories))
      })
    }
  }