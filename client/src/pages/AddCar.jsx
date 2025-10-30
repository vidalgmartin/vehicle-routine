export default function AddCar() {
    return (
        <div className="page-container">
            <h2>Add a Car</h2>
            
            <form className="form">
                <input type="text" placeholder="Car Make" />
                <input type="text" placeholder="Car Model" />
                <input type="number" placeholder="Year" />
                <button type="submit">Add Car</button>
            </form>
        </div>
    )
}