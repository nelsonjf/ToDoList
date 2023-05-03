import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

function Navbar () {
    const { logout } = useLogout() 
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return (
        <div className="navbar">
            <h1>
            <Link to="/">Home</Link>
            </h1>
            <nav>
                {user && (
                <div>
                    <span>{user.email}</span>
                    <button onClick={handleClick}>Log Out</button>
                </div>
                )}
                {!user && (
                <div className="account">
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
                )}
            </nav>
        </div>
    )
}

export default Navbar