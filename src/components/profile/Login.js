import React, { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { isAuthenticated, login } from '../../actions/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuthenticated()) {
            navigate('/')
        }
    })

  return (
    <Layout>
        <div className="container">
            <div className="input-group p-3">
                <label className='form-label text-align-center'>Google ile giriş</label>
                <div className='text-align-center m-3'>
                    <button className='btn btn-outline-secondary w-50' onClick={login}><i className="bi bi-google"></i></button>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Login