import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const { dispatch } = useAuthContext()
    const logout = () => {
        localStorage.removeItem('user')
        dispatch({type: 'LOGOUT'})
    }
    return {logout}
}

////////////////////////////////////////////////////////////////
// The Net Ninja (2022)                                       //
// MERN-auth-tutorial [source code]                           //
// https://github.com/iamshaunjp/MERN-Auth-Tutorial/tree/main //
////////////////////////////////////////////////////////////////