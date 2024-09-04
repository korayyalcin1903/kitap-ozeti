import React, { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { isAuthenticated, login } from '../../actions/auth'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Login = () => {
    const navigate = useNavigate()
    useSelector((state) => console.log(state))

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/')
        }
    })

  return (
    <Layout>
        <div className="container">
            <div className="input-group p-3">
                <label className='form-label'>Google ile giriş</label>
                <button className='btn btn-outline-secondary' onClick={login}><i className="bi bi-google"></i></button>
            </div>
        </div>
    </Layout>
  )
}

export default Login