import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

export default function Navbar() {
    const [ apiTest, setApiTest ] = useState("")

    // API Test
    const getVehicle = async () => {
        const res = await fetch('https://localhost:7261/api/vehicle')
        const vehicle = await res.json()

        setApiTest(vehicle)
    }

    return (
        <nav className="navbar">
            <div className="nav-logo">Garage</div>

            <button onClick={() => getVehicle()}>call API: {apiTest.make}</button>
            
            <ul className="nav-links">
                <li><Link to="/garage">My Garage</Link></li>
                <li><Link to="/add-car">Add Car</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    )
}