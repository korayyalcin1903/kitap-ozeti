import CreatePage from './CreatePage'
import Layout from '../layout/Layout'

import React, { Component } from 'react'

export class Profile extends Component {   
    render() {
      return (
        <>
          <Layout>
            <CreatePage />
          </Layout>
        </>
      )
    }
}

export default Profile
