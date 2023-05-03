import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

function Login () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {login, error, loading} = useLogin()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await login(email, password)
    }

    return (
        <form className="login" onSubmit={handleSubmit}>
            <h1>Log In</h1>
            <label>Email</label><br/>
            <input 
                type="email" 
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            /><br/>
            <label>Password</label><br/>
            <input 
                type="password" 
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            /><br/>
            <button disabled={loading}>Log In</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Login