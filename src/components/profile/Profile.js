import Layout from '../../layout/Layout'

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { userFromDatabase } from '../../actions/auth'

const Profile = () => {
  const dispatch = useDispatch()
  const user = useSelector(state => state.auth)

  useEffect(() => {
    dispatch(userFromDatabase())
  }, [dispatch])


  return (
    <>
      <Layout>
        <div className="pt-2">
          <div className="row">
            <div className='col-4'>
              <ul className='list-group'>
                <li className='list-group-item'>
                  <Link to='/profile/ozet_list'> Özetlerim </Link>
                </li>
                <li className='list-group-item'>
                  <Link to="/profile/create_ozet"> Ozet Ekle</Link>
                </li>
                <li className='list-group-item'>
                  <Link to='/profile/create_category'> Kategori Ekle</Link>
                </li>
              </ul>
            </div>
            <div className='col-4 container'>
              <div className="card">
                <img src="../img/users/2.jpg" className='img-fluid' alt="" />
                <div className="card-body">
                  <h4>{user.displayName}</h4>
                  <a href={`mailto:${user.email}`} className='nav-item'>{user.email}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}  

export default Profile
