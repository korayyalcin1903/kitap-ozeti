import React, { Component, useEffect, useState } from 'react'
import { addOzetToDatabase } from '../../actions/ozets'
import { connect, useDispatch, useSelector } from 'react-redux'
import Layout from '../../layout/Layout'
import { getCategoryToDatabase } from '../../actions/category'

const CreatePage = () => {

  const [name, setName] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategoryToDatabase());
  }, [dispatch])

  const onNameChange = (e) => setName(e.target.value)
  const onAuthorChange = (e) => setAuthor(e.target.value)
  const onDescriptionChange = (e) => setDescription(e.target.value)
  const onImageChange = (e) => setImage(e.target.files[0].name)
  const onCategoryChange = (e) => setCategory(e.target.value)

  const onSubmit = (e) => {
    e.preventDefault()
    dispatch(addOzetToDatabase({ name, author, description, image, category }))
  }

    return (
      <Layout >
        <main>
          <div className="container pb-3">
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
                <div className="mb-1 p-1 input-group">
                  <label htmlFor="category" className='form-label mb-1'>Kategoriler</label>
                  <select name="category" onChange={onCategoryChange}>
                    {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.name} 
                        </option>
                      ))}
                  </select>
                </div>
                <button className='btn btn-outline-secondary mx-1'>Gönder</button>
            </form>
          </div>
        </main>
      </Layout>
    )
  }



export default connect()(CreatePage)
