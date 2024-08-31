import Layout from '../../layout/Layout'

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Profile extends Component {   
    render() {
      return (
        <>
          <Layout>
            <div className="pt-2">
              <div className="row">
                <div className='col-4'>
                  <ul className='list-group'>
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
                    <img src="../img/users/1.jpg" className='img-fluid' alt="" />
                    <div className="card-body">
                      <h5>Koray Yalçın</h5>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Layout>
        </>
      )
    }
}

export default Profile
