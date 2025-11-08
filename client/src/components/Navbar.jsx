import { Link } from 'react-router-dom'
import { useState } from 'react'
import "./Navbar.css"

export default function Navbar() {
    const [ dropDown, setDropDown ] = useState(false)

    const openDropDown = () => {
        setDropDown(!dropDown)
    }
    
    return (
        <nav className="navbar">
            <div className="navbar-items">
                <Link to="/" id="logo"><h2>Garage</h2></Link>
                
                <div className="menu-wrapper">
                    <span id="menu-icon" onClick={() => openDropDown()}>Menu</span>

                    {dropDown && (
                        <div className="dropdown-menu">
                            <Link to="/login">Login</Link>

                            <Link to="/garage">My Garage</Link>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    )
}