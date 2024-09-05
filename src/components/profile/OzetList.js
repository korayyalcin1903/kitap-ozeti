import React, { useEffect } from 'react'
import Layout from '../../layout/Layout'
import { Link } from 'react-router-dom'
import { connect, useDispatch, useSelector } from 'react-redux'
import { filterUserOzetToDatabase, removeOzetFromDatabase } from '../../actions/ozets'

const OzetList = () => {
    const dispatch = useDispatch()
    const ozets = useSelector(state => state.ozets)

    useEffect(() => {
        dispatch(filterUserOzetToDatabase(localStorage.getItem('userid')))
    },[dispatch])

    const handleRemoveOzet = (id) => {
        dispatch(removeOzetFromDatabase(id)).then(() => {
            window.location.reload();
        })
    }

    return (
        <Layout>
            <div className="container">
                <table>
                    <thead>
                        <tr>
                            <td>#</td>
                            <td>Başlık</td>
                            <td>Yazar</td>
                            <td>Resim</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ozets.map((ozet) =>(
                                <tr key={ozet.id}>
                                    <td>{ozet.id}</td>
                                    <td>{ozet.name}</td>
                                    <td>{ozet.author}</td>
                                    <td><img src={`../img/books/${ozet.image}`} className='img-fluid' alt="" /></td>
                                    <td>
                                        <Link to={`/profile/edit_ozet/${ozet.id}`} className='btn btn-secondary'>Düzenle</Link>
                                        <button onClick={() => handleRemoveOzet(ozet.id)} className='btn btn-danger'>Sil</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </Layout>
    )
}

export default connect()(OzetList)