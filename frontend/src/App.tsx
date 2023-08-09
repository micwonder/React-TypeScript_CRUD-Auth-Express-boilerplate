import './styles/app.css'
import { Routes, Route, Outlet } from 'react-router-dom'
import Registration from './Pages/Registration/Registration'
import RiderRegist from './Pages/Registration/Rider/RiderRegist'
import VehicleRegist from './Pages/Registration/Vehicle/VehicleRegist'
import ProviderRegist from './Pages/Registration/Provider/ProviderRegist'
import SponsorRegist from './Pages/Registration/Sponsor/SponsorRegist'
import Login from './Pages/Login/Login'
import Onboarding from './Pages/Onboarding/Onboarding'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/register" element={<Outlet />}>
          <Route index element={<Registration />} />
          <Route path="rider" element={<RiderRegist />} />
          <Route path="vehicle" element={<VehicleRegist />} />
          <Route path="provider" element={<ProviderRegist />} />
          <Route path="sponsor" element={<SponsorRegist />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Routes>
    </div>
  )
}

export default App
