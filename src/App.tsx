import './App.css'
import LoginPage from './components/loginPage/loginPage'
import { BrowserRouter, Routes, Route, Navigate } from "react-router"

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
