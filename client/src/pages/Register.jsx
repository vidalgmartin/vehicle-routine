import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="page-container">
            <h2>Register</h2>

            <form className="form">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Register</button>
            </form>

            <p>Already have an account? <Link to="/">Login</Link></p>
        </div>
    )
}