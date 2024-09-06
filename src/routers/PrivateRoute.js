import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const PrivateRoute = ({children}) => {
    const isAuthenticated = useSelector((state) => state.auth.uid)
  return isAuthenticated ? 
    <div>
        {children}
    </div>
    :
    <Navigate to='/'/>
}

export default PrivateRoute