import { useState } from "react";
import { useAuthContext } from "./useAuthContext"

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)
    const { dispatch } = useAuthContext()

    const signup = async (email, password) => {
        setLoading(true)
        setError(null)

        const response = await fetch('https://todoserver-8pqw.onrender.com/signup', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
        const json = await response.json()

        if (!response.ok) {
            setLoading(false)
            setError(json.error)
        }
        if (response.ok) {
            localStorage.setItem('user', JSON.stringify(json))
            dispatch({type: 'LOGIN', payload: json})
            setLoading(false)
        }
    }

    return { signup, loading, error }
}

////////////////////////////////////////////////////////////////
// The Net Ninja (2022)                                       //
// MERN-auth-tutorial [source code]                           //
// https://github.com/iamshaunjp/MERN-Auth-Tutorial/tree/main //
////////////////////////////////////////////////////////////////