import "./CarCard.css"

export default function CarCard({ car }) {
    return (
        <div className="car-card">
            <h3>{car.name}</h3>
            <p>Year: {car.year}</p>
            <p>Status: All systems normal</p>
        </div>
    )
}