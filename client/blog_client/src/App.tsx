import { Route, Routes } from "react-router-dom"
import Login from "./components/pages/Login"
import Register from "./components/pages/Register"
import Home from "./components/pages/Home"
import Dashboard from "./components/Dashboard"
import { ToastContainer } from "react-toastify"
import ResetPassword from "./components/Auth/ResetPassword"

const App: React.FC = () => {
  return (
    <>
    
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
