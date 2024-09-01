import React, { Component } from 'react'
import Layout from '../../layout/Layout'
import { addCategoryToDatabase } from '../../actions/category'
import { connect } from 'react-redux'

export class CreateCategoryPage extends Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      error: ''
    }
  }



  onNameChange = (e) => {
    const name = e.target.value
    this.setState(() => ({name}))
  }

  onSubmit = (e) => {
    e.preventDefault()
    if(this.state.name === ''){
      this.setState({error:'Lütfen bir kategori giriniz.'})
    } else {
      this.props.dispatch(addCategoryToDatabase(this.state))
      this.setState({error: 'Başarıyla Kategori eklendi'})
    }

  }


  render() {
    return (
      <Layout >
        <main>
          <div className="container pb-3">
            <h1 className='px-1'>Özet Ekle</h1>
            <hr/>
            <form onSubmit={this.onSubmit} encType='multipart/form-data'>
                <div className="mb-1 p-1 input-group">
                  <label htmlFor="name" className='form-label mb-1'>Kategori Adı</label>
                  <input type="text" className='form-input' onChange={this.onNameChange}/>
                  {this.state.error && <p className='error'>{this.state.error}</p>}
                </div>
                <button className='btn btn-outline-secondary mx-1'>Gönder</button>
            </form>
          </div>
        </main>
      </Layout>
    )
  }
}

export default connect()(CreateCategoryPage)