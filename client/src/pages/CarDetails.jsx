import { useParams } from "react-router-dom"

export default function CarDetails() {
    const { id } = useParams()

    return(
        <div className="page-container">
            <h2>Car Details (ID: {id})</h2>

            <div className="car-visualization">
                <div className="placeholder-3d">3D Car Model Placeholder</div>
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