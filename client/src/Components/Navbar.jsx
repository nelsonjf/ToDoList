import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div className="navbar">
            <h1>
            <Link to="/">Home</Link>
            </h1>
            <nav>
                <div className="account">
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar