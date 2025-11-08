import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import VehicleCard from "../components/VehicleCard"

export default function Garage() {
    const [ vehicles, setVehicles ] = useState([])

    // API Test
    useEffect(() => {
        const getVehicles = async () => {
            try {
                const res = await fetch('https://localhost:7261/api/vehicle')
                const data = await res.json()

                setVehicles(data)
            } catch (err) {
                console.error(err)
            }
        }
        
        getVehicles()
    }, [])

    return (
        <div className="page-container">
            <h2>My Garage</h2>
            <Link to="/add-vehicle">Add Vehicle</Link>

            <div className="vehicle-list">
                {vehicles.map((vehicle) => (
                    <Link key={vehicle.id} to={`/vehicle/${vehicle.id}`}>
                        <VehicleCard vehicle={vehicle}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}