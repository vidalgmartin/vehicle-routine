import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import VehicleCard from "../components/VehicleCard"

export default function Garage() {
    const [ vehicles, setVehicles ] = useState([])
    const [ users, setUsers ] = useState([])

    // API Test
    useEffect(() => {
        const getVehicles = async () => {
            try {
                const res = await fetch('https://localhost:7261/api/vehicle/all')
                const data = await res.json()

                setVehicles(data)
            } catch (err) {
                console.error(err)
            }
        }

        const getUsers = async () => {
            try {
                const res = await fetch('https://localhost:7261/api/user/all')
                const data = await res.json()

                setUsers(data)
            } catch (err) {
                console.error(err)
            }
        }
        
        getVehicles()
        getUsers()
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

            <div className="vehicle-list">
                {users.map((user) => (
                    <Link key={user.id} to={`/vehicle/${user.id}`}>
                        <VehicleCard vehicle={user}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}