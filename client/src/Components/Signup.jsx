import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

function Signup () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, loading} = useSignup()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        await signup(email, password)
    }

    return (
        <form className="signup" onSubmit={handleSubmit}>
            <h1>Sign Up</h1>
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
            <button disabled={loading}>Sign Up</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default Signup