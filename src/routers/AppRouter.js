import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MyListPage from '../components/MyListPage'
import EditPage from '../components/EditPage'
import HomePage from '../components/HomePage'
import Details from '../components/Details'
import CreatePage from '../components/profile/CreatePage'
import CreateCategoryPage from '../components/profile/CreateCategoryPage'
import Profile from '../components/profile/Profile'
import OzetList from '../components/profile/OzetList'
import Login from '../components/profile/Login'
import CategoryPage from '../components/CategoryPage'
import PrivateRoute from './PrivateRoute'
import NotFound from '../components/NotFound'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<HomePage />}/>
            <Route path='/ozet/:id' element={<Details />} />
            <Route path='/listem' element={<MyListPage />}/>
            <Route path='/profile' element={<PrivateRoute><Profile/></PrivateRoute>}/>
            <Route path='/profile/ozet_list' element={<PrivateRoute><OzetList /></PrivateRoute>}/>
            <Route path='/profile/create_ozet' element={<PrivateRoute><CreatePage/></PrivateRoute>}/>
            <Route path='/profile/edit_ozet/:id' element={<PrivateRoute><CreatePage/></PrivateRoute>}/>
            <Route path='/profile/create_category' element={<PrivateRoute><CreateCategoryPage /></PrivateRoute>}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/category/:category_id' element={<CategoryPage />}/>
            <Route path='/edit/:id' element={<PrivateRoute><EditPage /></PrivateRoute>}/>
            <Route path='*' element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter