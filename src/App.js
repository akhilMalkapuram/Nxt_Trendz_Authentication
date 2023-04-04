import {Routes, Route, BrowserRouter} from 'react-router-dom'

import LoginForm from './components/LoginForm'
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

const App = () => (
  <BrowserRouter>
  <Routes>
    <Route exact path="/login" element={<LoginForm/>} />
    <ProtectedRoute exact path="/" element={<Home/>} />
    <ProtectedRoute exact path="/products" element={<Products/>} />
    <ProtectedRoute exact path="/cart" element={<Cart/>} />
    <Route element={<NotFound/>} />
  </Routes>
  </BrowserRouter>
)

export default App