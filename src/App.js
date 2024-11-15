import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPage from "./pages/AdminPage";
import UserPage from './pages/UserPage';
import RoomDetail from "./component/user/room/script/RoomDetail";

//24.11.12 지은 [완료] : Router, Routes, Route 적용 테스트
function App() {
  return (
    <BrowserRouter basename="/" future={{ v7_startTransition: true }}>
      <Routes>
        <Route path="/*" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
       
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
