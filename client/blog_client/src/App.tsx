import { Route, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Home from "./components/Home"
import Dashboard from "./components/Dashboard"
import Navbar from "./components/layout/Navbar"
import { ToastContainer } from "react-toastify"
import ResetPassword from "./components/Auth/ResetPassword"

const App: React.FC = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home />}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reset-password" element={<ResetPassword />}/>
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
