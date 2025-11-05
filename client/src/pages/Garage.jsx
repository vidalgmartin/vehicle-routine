import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import CarCard from "../components/VehicleCard"

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

    return(
        <div className="page-container">
            <h2>My Garage</h2>

            <div className="car-list">
                {vehicles.map((vehicle) => (
                    <Link key={vehicle.id} to={`/car/${vehicle.id}`}>
                        <CarCard vehicle={vehicle}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}