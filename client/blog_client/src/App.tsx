import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
