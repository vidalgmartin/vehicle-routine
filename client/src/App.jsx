import { Routes, Route } from "react-router-dom"
import "./App.css"

// Components
import Navbar from "./components/Navbar"

// Pages
import AddVehicle from "./pages/AddVehicle"
import VehicleDetails from "./pages/VehicleDetails"
import Garage from "./pages/Garage"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"

export default function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/garage" element={<Garage />} />
          <Route path="/add-vehicle" element={<AddVehicle />} />
          <Route path="/vehicle/:id" element={<VehicleDetails />} />
        </Routes>
      </div>
    </div>
  )
}