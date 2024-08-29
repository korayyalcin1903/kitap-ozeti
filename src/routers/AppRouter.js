import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyListPage from '../components/MyListPage'
import Profile from '../components/Profile'
import Category from '../components/Category'
import CreatePage from '../components/CreatePage'
import EditPage from '../components/EditPage'
import HomePage from '../components/HomePage'
import Details from '../components/Details'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/ozet/:id' element={<Details />} />
            <Route path='/listem' element={<MyListPage />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/category/:category_name' element={<Category />}/>
            <Route path='/create' element={<CreatePage />}/>
            <Route path='/edit/:id' element={<EditPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter