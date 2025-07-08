import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from "./components/login"
import Register from "./components/Register"


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
