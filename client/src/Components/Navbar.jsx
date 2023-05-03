import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

function Navbar () {
    const { logout } = useLogout() 
    const handleClick = () => {
        logout()
    }

    return (
        <div className="navbar">
            <h1>
            <Link to="/">Home</Link>
            </h1>
            <nav>
                <div><button onClick={handleClick}>Log Out</button></div>
                <div className="account">
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar