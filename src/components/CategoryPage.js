import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getCategoryFromDatabase } from '../actions/ozets'
import Card from './Card'
import Layout from '../layout/Layout'

const CategoryPage = () => {
  const dispatch = useDispatch()
  const { category_id } = useParams()
  const ozets = useSelector((state) => state.ozets)

  useEffect(() => {
    if (category_id) {
      dispatch(getCategoryFromDatabase(category_id))
    }
  }, [dispatch, category_id])


  return (
    <Layout>
        <div className="container">
            <div className="row mt-3">
                {
                    ozets.length === 0 ? (
                        <h3>Malesef bu kategoride özet yok...</h3>
                    ) : (
                        ozets.map((ozet) => (
                            <div className="col-4" key={ozet.id} {...ozet}>
                                <Card ozet={ozet} />
                            </div>
                    ))
                    )
                }
            </div>
        </div>
    </Layout>
  )
}

export default (CategoryPage)
