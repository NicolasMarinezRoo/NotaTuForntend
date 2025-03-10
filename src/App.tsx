
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Register from './pages/Register'
import { Toaster } from 'react-hot-toast'
import Notas from './pages/Notas'
import Profile from './pages/Perfil'
import UserList from './pages/userList'

function App() {

  return (
    <>
      <BrowserRouter>
      <Navbar />
      <Toaster
          position="top-center"
          reverseOrder={false}
        />
      <div className='container mx-auto'></div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/notas" element={<Notas />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/userlist" element={<UserList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App