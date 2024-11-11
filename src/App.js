import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserIndex from './pages/UserIndex';
import AdminIndex from './pages/AdminIndex';
import PaymentPage from './components/PaymentPage';
import AboutPage from './components/AboutPage';
import RoomViewPage from './components/RoomViewPage';
import SpecialPage from './components/SpecialPage';
import ReservationPage from './components/ReservationPage';
import CommunityPage from './components/CommunityPage';

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<UserIndex />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/room" element={<RoomViewPage />}/>
        <Route path="/special" element={<SpecialPage />} />
        <Route path="/reservation" element={<ReservationPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/admin" element={<AdminIndex />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
