import { Link } from "react-router-dom"
import "./Navbar.css"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-logo">Garage</div>

            <ul className="nav-links">
                <li><Link to="/garage">My Garage</Link></li>
                <li><Link to="/add-car">Add Car</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    )
}