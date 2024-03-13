import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './Signup';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Login';
import Home from './Home'
import LandingPage from './LandingPage';
import RouteOptimization from './RouteOptimization';
import VehicleProtocols from './VehicleProtocols';
import ScheduleCordinate from './ScheduleCordinate';
import RtTracking from './RtTracking';
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' element={<LandingPage/>}></Route>
        <Route path="/A" element={<RouteOptimization />} />
        <Route path="/B" element={<VehicleProtocols />} />
        <Route path="/C" element={<ScheduleCordinate />} />
        <Route path="/D" element={<RtTracking />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
