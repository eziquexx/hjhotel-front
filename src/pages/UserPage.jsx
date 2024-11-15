import { Routes, Route } from "react-router-dom";
import Header from "../component/common/Header";
import AboutContent from "../component/user/about/script/AboutContent";
import CommunityContent from "../component/user/community/script/CommunityContent";
import PaymentContent from "../component/user/payment/script/PaymentContent";
import ReservationContent from "../component/user/reservation/script/ReservationContent";
import RoomContent from "../component/user/room/script/RoomContent";
import SpecialContent from "../component/user/special/script/SpecialContent";
import FullScreenPage from "./FullScreenPage";
import RoomDetail from "../component/user/room/script/RoomDetail";
//24.11.12 지은 [완료] : 사용자 페이지, 메뉴 테스트
export default function UserPage() {
  return (
    <div>
    <Header />
    <Routes>
      <Route path="/" element={<FullScreenPage />} />
      <Route path="/about" element={<AboutContent />} />
      <Route path="/room" element={<RoomContent />} />
      <Route path="/special" element={<SpecialContent />} />
      <Route path="/reservation" element={<ReservationContent />} />
      <Route path="/community" element={<CommunityContent />} />
      <Route path="/payment" element={<PaymentContent />} />

      {/*  */}
      <Route path="/roomdetail" element={< RoomDetail/>} />

    </Routes>
  </div>
  );
}
