import { Link } from "react-router-dom"
import { useState } from "react"
import "./Navbar.css"

export default function Navbar() {
    const [ vehicles, setVehicles ] = useState([])

    // API Test
    const getVehicle = async () => {
        try {
            const res = await fetch('https://localhost:7261/api/vehicle')
            const data = await res.json()

            setVehicles(data)
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <nav className="navbar">
            <div className="nav-logo">Garage</div>

            <button onClick={() => getVehicle()}>call API</button>

            {vehicles.map(vehicle => (
                <p key={vehicle.id}>{vehicle.make}</p>
            ))}
            
            <ul className="nav-links">
                <li><Link to="/garage">My Garage</Link></li>
                <li><Link to="/add-car">Add Car</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
        </nav>
    )
}