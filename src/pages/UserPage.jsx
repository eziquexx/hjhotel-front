import { Routes, Route } from "react-router-dom";
import Header from "../component/common/Header";
import AboutContent from "../component/user/about/script/AboutContent";
import RoomContent from "../component/user/room/script/RoomContent";
import SpecialContent from "../component/user/special/script/SpecialContent";
import ReservationContent from "../component/user/reservation/script/ReservationContent";
import CommunityContent from "../component/user/community/script/CommunityContent";
import PaymentContent from "../component/user/payment/script/PaymentContent";
import FullScreenPage from "./FullScreenPage";


//24.11.12 지은 [완료] : 사용자 페이지 경로 테스트.
export default function UserPage() {
  return (
    <div>
      <Header />
      <Routes>
        <Route index element={<FullScreenPage />} />
        <Route path="about" element={<AboutContent />} />
        <Route path="room" element={<RoomContent />} />
        <Route path="special" element={<SpecialContent />} />
        <Route path="reservation" element={<ReservationContent />} />
        <Route path="community" element={<CommunityContent />} />
        <Route path="payment" element={<PaymentContent />} />
      </Routes>
    </div>
  );
}
