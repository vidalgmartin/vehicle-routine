import { Link } from "react-router-dom"

export default function Login() {
    return (
        <div className="page-container">
            <form className="form">
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>

            <p className="form-footer">Don't have an account? <Link to="/register">Register</Link></p>
        </div>
    )
}