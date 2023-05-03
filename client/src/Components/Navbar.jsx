import { Link } from "react-router-dom";

function Navbar () {
    return (
        <div>
            <Link to="/">
                <h1>Home</h1>
            </Link>
            <nav>
                <div>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar