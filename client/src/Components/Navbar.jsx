import { Link } from "react-router-dom"

function Navbar () {
    return (
        <div>
            <nav className="navbar">
                <Link to='/'>Home</Link>
                <Link to='/new'>New ToDo</Link>
            </nav>
        </div>
    )
}

export default Navbar