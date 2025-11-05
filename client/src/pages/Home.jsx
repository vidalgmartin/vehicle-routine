import { Link } from "react-router-dom"
import './home.css'

export default function Home() {
    
    return (
        <div className="home-container">

            <div className="home-content-container">
                <div className="home-content home-section">
                    <div className="home-text">
                        <h2>Store, share and view</h2>
                        <h2>3D art</h2>
                    </div>
                            
                    
                    <div className="home-btns">
                        <Link to="/signup">
                            <button>
                                Sign Up
                            </button>
                        </Link>

                        <Link to="/login">Already have an account?</Link>
                    </div>
                </div>

            </div>

      </div>
    )
}