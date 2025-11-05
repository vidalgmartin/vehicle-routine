import "./VehicleCard.css"

export default function VehicleCard({ vehicle }) {
    return (
        <div className="vehicle-card">
            <h3>{vehicle.make}</h3>
            <p>Model: {vehicle.model}</p>
            <p>Status: All systems normal</p>
        </div>
    )
}