import { signInWithPopup, signOut } from "firebase/auth"
import { auth, googleAuthProvider } from "../firebase/firebaseConfigure"

export const login = () => {
    return signInWithPopup(auth, googleAuthProvider)
            .then((result) => {
                const user = result.user

                    localStorage.setItem('userid', user.uid)

                })
}

export const loginAction = (uid) => ({
    type: 'LOGIN',
    uid
})

export const logout = () => {
    localStorage.removeItem('userid')
    return signOut(auth)
}

export const logoutAction = () => ({
    type: 'LOGOUT'
})

export const isAuthenticated = () => {
    const userid = localStorage.getItem('userid')
    return userid !== null
}