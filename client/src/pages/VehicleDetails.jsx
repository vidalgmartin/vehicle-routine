import { useParams } from "react-router-dom"

export default function VehicleDetails() {
    const { id } = useParams()

    return(
        <div className="page-container">
            <h2>Vehicle Details (ID: {id})</h2>

            <div className="vehicle-visualization">
                <div className="placeholder-3d">3D vehicle Model Placeholder</div>
            </div>

            <div className="maintenance-section">
                <h3>Maintenance Schedule</h3>

                <ul>
                    <li>Oil Change - Due in 1,000 miles</li>
                    <li>Air Filter - Due in 3,000 miles</li>
                    <li>Brakes - Good condition</li>
                </ul>
            </div>
        </div>
    )
}