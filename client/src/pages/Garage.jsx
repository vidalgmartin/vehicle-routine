import { Link } from "react-router-dom"
import CarCard from '../components/CarCard'

export default function Garage() {
    const testCars = [
        { id: 1, name: "Toyota Camry", year: 2012 },
        { id: 2, name: "Toyota Supra", year: 2021 }
    ]

    return(
        <div className="page-container">
            <h2>My Garage</h2>

            <div className="car-list">
                {testCars.map((car) => (
                    <Link key={car.id} to={`/car/${car.id}`}>
                        <CarCard car={car}/>
                    </Link>
                ))}
            </div>
        </div>
    )
}