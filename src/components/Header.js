import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { getCategoryToDatabase } from '../actions/category'
import { isAuthenticated, logout } from '../actions/auth'


const Header = (props) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.categories)
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        dispatch(getCategoryToDatabase());
        setIsLogin(isAuthenticated())
      }, [dispatch])

    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div className="menu">
                    <div className="logo nav-item"><NavLink to="/"><i className="bi bi-journal-bookmark"></i> Summary</NavLink></div>
                    <li className="menu-button nav-item"><i className="bi bi-list"></i></li>
                </div>
                <ul className="navbar-nav main-menu visible">
                    { isLogin ? (
                        <>
                            <li className="nav-item"><NavLink to="/listem"><i className="bi bi-star"></i> Listem</NavLink></li>
                            <li className="nav-item"><NavLink to="/profile"><i className="bi bi-person"></i> Profil</NavLink></li>
                            <li className="nav-item"><NavLink to='/login' onClick={logout}><i className="bi bi-box-arrow-left"></i> Logout</NavLink></li>
                        </>
                    ) :
                        (
                            <li className="nav-item"><NavLink to='/login'><i className="bi bi-person"></i> Login</NavLink></li>

                        )
                    }
                </ul>
            </div>
            <div className="category">
                <ul className="navbar-nav">
                    { isLogin ? (
                        <>
                            <li className="nav-item nav-item main-menu-item"><NavLink to="/listem"><i className="bi bi-star"></i> Listem</NavLink></li>
                            <li className="nav-item nav-item main-menu-item"><NavLink to="/profile"><i className="bi bi-person"></i> Profil</NavLink></li>
                            <li className="nav-item nav-item main-menu-item"><NavLink to='/login' onClick={logout}><i className="bi bi-box-arrow-left"></i> Logout</NavLink></li>
                        </>
                    ) :
                        (
                            <li className="nav-item nav-item main-menu-item"><NavLink to='/login'><i className="bi bi-person"></i> Login</NavLink></li>

                        )
                    }
                    {
                        categories.map((category) => (
                            <li className="nav-item" key={category.id}><NavLink to={`/category/${category.name}`}>{category.name}</NavLink></li>
                        ))
                    }
                </ul>
            </div>
        </nav>
    )
}


export default Header