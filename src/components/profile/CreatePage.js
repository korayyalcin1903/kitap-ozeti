import React, {  useEffect, useState } from 'react'
import { addOzetToDatabase, editOzetToDatabase, filterOzet, filterOzetToDatabse, getOzetsFromDatabase } from '../../actions/ozets'
import { connect, useDispatch, useSelector } from 'react-redux'
import Layout from '../../layout/Layout'
import { getCategoryToDatabase } from '../../actions/category'
import { useNavigate, useParams } from 'react-router-dom'

const CreatePage = () => {
  const navigate = useNavigate()

  const [name, setName] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState('')
  const [category, setCategory] = useState('')
  const [errors, setErrors] = useState({})

  const dispatch = useDispatch()
  const categories = useSelector((state) => state.categories)

  const {id} = useParams()

  useEffect(() => {
    dispatch(getCategoryToDatabase())

    if (id) {
      dispatch(filterOzetToDatabse(id)).then((data) => {
        console.log(data)
        setName(data.name)
        setAuthor(data.author)
        setDescription(data.description)
        setImage(data.image)
        setCategory(data.category)
      })
    }
  }, [dispatch, id])

  const onNameChange = (e) => setName(e.target.value)
  const onAuthorChange = (e) => setAuthor(e.target.value)
  const onDescriptionChange = (e) => setDescription(e.target.value)
  const onImageChange = (e) => setImage(e.target.files[0].name)
  const onCategoryChange = (e) => setCategory(e.target.value)

  const validateForm = () => {
    let formErrors = {}
    if (!name) formErrors.name = 'Kitap adı gereklidir.'
    if (!author) formErrors.author = 'Yazar adı gereklidir.'
    if (!description) formErrors.description = 'Açıklama gereklidir.'
    if (!image) formErrors.image = 'Bir resim yüklemeniz gerekmektedir.'
    if (!category) formErrors.category = 'Bir kategori seçmeniz gerekmektedir.'

    setErrors(formErrors)

    return Object.keys(formErrors).length === 0
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if(validateForm()){
      if(id){
        dispatch(editOzetToDatabase(id, { name, author, description, image, category}))
        navigate('/')
      } else {
        dispatch(addOzetToDatabase({ name, author, description, image, category, id }))
        navigate('/')
      }
    }
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
                  <input type="text" className='form-input' value={name} onChange={onNameChange}/>
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>
                <div className="mb-1 p-1 input-group">
                  <label htmlFor="author" className='form-label mb-1'>Yazar</label>
                  <input type="text" className='form-input' value={author} onChange={onAuthorChange}/>
                  {errors.author && <p className="error">{errors.author}</p>}
                </div>
                <div className="mb-1 p-1 input-group">
                  <label htmlFor="description" className='form-label mb-1'>Kitap Özeti</label>
                  <textarea name="description" rows={4} className='form-area' value={description} onChange={onDescriptionChange}></textarea>
                  {errors.description && <p className="error">{errors.description}</p>}
                </div>
                <div className="mb-1 p-1 input-group img-form">
                  <label htmlFor="image" className='form-label mb-1'>Kitap Resmi</label>
                    <input type="file" className='form-input' onChange={onImageChange}/>
                    {errors.image && <p className="error">{errors.image}</p>}
                </div>
                <div className="mb-1 p-1 input-group">
                  <label htmlFor="category" className='form-label mb-1'>Kategoriler</label>
                  <select name="category" onChange={onCategoryChange} value={category}>
                    <option value="none" >Lütfen bir kategori seçiniz</option>
                    {categories.map((category) => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                  {errors.category && <p className="error">{errors.category}</p>}
                </div>
                <button className='btn btn-outline-secondary mx-1'>Gönder</button>
            </form>
          </div>
        </main>
      </Layout>
    )
  }



export default connect()(CreatePage)
