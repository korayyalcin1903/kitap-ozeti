import React, { useEffect } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCategoryToDatabase } from '../actions/category'



const Header = (props) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories)

    useEffect(() => {
        dispatch(getCategoryToDatabase());
      }, [dispatch])

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="menu">
                    <div className="logo nav-item"><NavLink to="/"><i className="bi bi-journal-bookmark"></i> Summary</NavLink></div>
                    <li className="menu-button nav-item"><i className="bi bi-list"></i></li>
                </div>
                <ul className="navbar-nav main-menu visible">
                    <li className="nav-item"><NavLink to="/listem"><i className="bi bi-star"></i> Listem</NavLink></li>
                    <li className="nav-item"><NavLink to="/profile"><i className="bi bi-person"></i> Profil</NavLink></li>
                </ul>
            </div>
            <div className="category">
                <ul className="navbar-nav">
                    <li className="nav-item main-menu-item"><NavLink to="/listem"><i className="bi bi-star"></i> Listem</NavLink></li>
                    <li className="nav-item main-menu-item"><NavLink to="/profile"><i className="bi bi-person"></i> Profil</NavLink></li>

                    {
                        categories.map((category) => (
                            <li className="nav-item" key={category.id}><NavLink to={`/category/${category.name}`}>{category.name}</NavLink></li>
                        ))
                    }

                    {/* <li className="nav-item"><NavLink to="/category/roman">Bilim Kurgu</NavLink></li>
                    <li className="nav-item"><NavLink to="/category/roman">Tarih</NavLink></li>
                    <li className="nav-item"><NavLink to="/category/roman">Felsefe</NavLink></li>
                    <li className="nav-item"><NavLink to="/category/roman">Biyogrofi</NavLink></li>
                    <li className="nav-item"><NavLink to="/category/roman">Sağlık</NavLink></li>
                    <li className="nav-item"><NavLink to="/category/roman">Çocuk</NavLink></li> */}
                </ul>
            </div>
        </nav>
    )
}


export default Header