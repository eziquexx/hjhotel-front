import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutContent from "./component/user/about/script/AboutContent";
import RoomContent from "./component/user/room/script/RoomContent";
import SpecialContent from "./component/user/special/script/SpecialContent";
import ReservationContent from "./component/user/reservation/script/ReservationContent";
import CommunityContent from "./component/user/community/script/CommunityContent";
import PaymentContent from "./component/user/payment/script/PaymentContent";
import AdminPage from "./pages/AdminPage";
import FullScreenPage from "./pages/FullScreenPage";
//24.11.12 성준 [진행중] : 약관 , 회원가입 페이지
import TermsPage from "./component/user/member/script/TermsPage";
import RegisterForm from "./component/user/member/script/RegisterForm";

//24.11.12 지은 [완료] : Router, Routes, Route 적용 테스트
function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<FullScreenPage />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/room" element={<RoomContent />} />
        <Route path="/special" element={<SpecialContent />} />
        <Route path="/reservation" element={<ReservationContent />} />
        <Route path="/community" element={<CommunityContent />} />
        <Route path="/payment" element={<PaymentContent />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/terms" element={<TermsPage />} /> {/*24.11.12 성준[진행중] 약관페이지 테스트*/}
        <Route path="/register" element={<RegisterForm />} /> {/*24.11.12 성준[진행중]  회원가입 페이지 테스트*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
