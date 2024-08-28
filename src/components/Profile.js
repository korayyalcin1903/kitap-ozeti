import Header from './Header'

import React, { Component } from 'react'

export class Profile extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      author: '',
      description: '',
      image: ''
    }
  }

  onNameChange = (e) =>{
    const name = e.target.value
    this.setState(() => ({name}))
  }

  onAuthorChange = (e) =>{
    const author = e.target.value
    this.setState(() => ({author}))
  }

  onDescriptionChange = (e) =>{
    const description = e.target.value
    this.setState(() => ({description}))
  }

  onImageChange = (e) =>{
    const image = e.target.files[0].name
    this.setState(() => ({image}))
  }

  onSubmit = (e) => {
    e.preventDefault()
  }
   
    render() {
      return (
        <>
          <Header />
            <div className="container">
              <h1 className='px-1'>Özet Ekle</h1>
              <hr/>
              <form onSubmit={this.onSubmit} method='post' encType='multipart/form-data'>
                  <div className="mb-1 p-1 input-group">
                    <label htmlFor="name" className='form-label mb-1'>Kitap Adı</label>
                    <input type="text" className='form-input' onChange={this.onNameChange}/>
                  </div>
                  <div className="mb-1 p-1 input-group">
                    <label htmlFor="author" className='form-label mb-1'>Yazar</label>
                    <input type="text" className='form-input' onChange={this.onAuthorChange}/>
                  </div>
                  <div className="mb-1 p-1 input-group">
                    <label htmlFor="description" className='form-label mb-1'>Kitap Özeti</label>
                    <textarea name="description" rows={4} className='form-area' onChange={this.onDescriptionChange}></textarea>
                  </div>
                  <div className="mb-1 p-1 input-group img-form">
                    <label htmlFor="image" className='form-label mb-1'>Kitap Resmi</label>
                      <input type="file" className='form-input' onChange={this.onImageChange}/>
                  </div>
                  <button className='btn btn-outline-secondary mx-1'>Gönder</button>
              </form>
            </div>
        </>
      )
    }
}

export default Profile
