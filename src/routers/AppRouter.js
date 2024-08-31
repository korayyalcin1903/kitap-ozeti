import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyListPage from '../components/MyListPage'
import Category from '../components/profile/CreateCategoryPage'
import EditPage from '../components/EditPage'
import HomePage from '../components/HomePage'
import Details from '../components/Details'
import CreatePage from '../components/profile/CreatePage'
import CreateCategoryPage from '../components/profile/CreateCategoryPage'
import Profile from '../components/profile/Profile'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/ozet/:id' element={<Details />} />
            <Route path='/listem' element={<MyListPage />}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/profile/create_ozet' element={<CreatePage />}/>
            <Route path='/profile/create_category' element={<CreateCategoryPage />}/>
            <Route path='/category/:category_name' element={<Category />}/>
            <Route path='/create' element={<CreatePage />}/>
            <Route path='/edit/:id' element={<EditPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter