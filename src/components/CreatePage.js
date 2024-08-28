import React, { useState } from 'react'

const CreatePage = () => {
  const ozetler = [
    {
      id: 1,
      name: 'Kitap 1',
      author: 'yazar',
      description: 'iyi kitap',
    }
  ]

  const [ozets, setOzets] = useState(ozetler)
  
  const onNameChange = (e) =>{
    const name = e.target.value
    setOzets(() => ({name:name}))
  }

  const onAuthorChange = (e) =>{
    const author = e.target.value
    setOzets(() => ({author:author}))
  }

  const onDescriptionChange = (e) =>{
    const description = e.target.value
    setOzets(() => ({description:description}))
  }

  const onImageChange = (e) =>{
    const image = e.target.files[0].name
    setOzets(() => ({image}))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className="container">
      <h1 className='px-1'>Özet Ekle</h1>
      <hr/>
      <form onSubmit={onSubmit} encType='multipart/form-data'>
          <div className="mb-1 p-1 input-group">
            <label htmlFor="name" className='form-label mb-1'>Kitap Adı</label>
            <input type="text" className='form-input' onChange={onNameChange}/>
          </div>
          <div className="mb-1 p-1 input-group">
            <label htmlFor="author" className='form-label mb-1'>Yazar</label>
            <input type="text" className='form-input' onChange={onAuthorChange}/>
          </div>
          <div className="mb-1 p-1 input-group">
            <label htmlFor="description" className='form-label mb-1'>Kitap Özeti</label>
            <textarea name="description" rows={4} className='form-area' onChange={onDescriptionChange}></textarea>
          </div>
          <div className="mb-1 p-1 input-group img-form">
            <label htmlFor="image" className='form-label mb-1'>Kitap Resmi</label>
              <input type="file" className='form-input' onChange={onImageChange}/>
          </div>
          <button className='btn btn-outline-secondary mx-1'>Gönder</button>
      </form>
    </div>
  )
}

export default CreatePage