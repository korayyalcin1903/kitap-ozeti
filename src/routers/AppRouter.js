import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyListPage from '../components/MyListPage'
import Profile from '../components/Profile'
import Category from '../components/Category'
import CreatePage from '../components/CreatePage'
import EditPage from '../components/EditPage'
import OzetPage from '../components/OzetPage'
import HomePage from '../components/HomePage'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/listem' element={<MyListPage />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/category/:category_name' element={<Category />}/>
            <Route path='/create' element={<CreatePage />}/>
            <Route path='/edit/:id' element={<EditPage />}/>
            <Route path='/ozet/:id' element={<OzetPage />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter