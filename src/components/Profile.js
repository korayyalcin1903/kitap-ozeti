import CreatePage from './CreatePage'
import Header from './Header'

import React, { Component } from 'react'

export class Profile extends Component {   
    render() {
      return (
        <>
          <Header />
          <CreatePage />
        </>
      )
    }
}

export default Profile
