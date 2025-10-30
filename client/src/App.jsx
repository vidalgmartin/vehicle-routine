import { Routes, Route } from "react-router-dom"
import "./App.css"

// Components
import Navbar from "./components/Navbar"

// Pages
import AddCar from "./pages/AddCar"
import CarDetails from "./pages/CarDetails"
import Garage from "./pages/Garage"
import Login from "./pages/Login"
import Register from "./pages/Register"

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/add-car" element={<AddCar />} />
          <Route path="/car/:id" element={<CarDetails />} />
        </Routes>
      </div>
    </div>
  )
}