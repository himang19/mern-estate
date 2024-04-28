import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import SingIn from './pages/SingIn';
import SiunUp from './pages/SiunUp';
import About from './pages/About';
import Profile from './pages/profile';
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
export default function App() {
  return  <BrowserRouter>
         <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SingIn/>} />
      <Route path='/sign-up' element={<SiunUp />} />
      <Route path='/about' element={<About />} />
      <Route path='/profile' element={<Profile />} />

      </Routes>
      </BrowserRouter>
}