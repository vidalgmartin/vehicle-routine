export default function AddVehicle() {
    return (
        <div className="page-container">
            <h2>Add a Vehicle</h2>
            
            <form className="form">
                <input type="text" placeholder="Vehicle Make" />
                <input type="text" placeholder="Vehicle Model" />
                <input type="number" placeholder="Year" />
                
                <button type="submit">Add Vehicle</button>
            </form>
        </div>
    )
}