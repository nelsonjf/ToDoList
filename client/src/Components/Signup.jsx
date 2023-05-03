import { useState } from "react";

function Signup () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(email, password)
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
            <button>Sign Up</button>
        </form>
    )
}

export default Signup