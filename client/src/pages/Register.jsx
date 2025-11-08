import { Link } from "react-router-dom"

export default function Register() {
    return (
        <div className="page-container">
            <form className="form">
                <input type="text" placeholder="Name"/>
                <input type="text" placeholder="Email"/>
                <input type="password" placeholder="Password"/>
                <button type="submit">Register</button>
            </form>

            <p className="form-footer">Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}