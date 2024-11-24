import { Routes , Route } from "react-router-dom";
import ReservationCalendar from "./ReservationCalendar";
import ReservationGuide from "./ReservationGuide";

//24.11.12 지은 [완료] : ReservationContent 테스트.
export default function ReservationContent() {
  return (
    <div>
      <h1>예약페이지</h1>
      <div>예약안내, 실시간예약 페이지가 하위 컴포넌트식으로 들어갈 예정</div>
      <Routes>
        <Route path="/" element={<ReservationCalendar/>} />
        <Route path="guide" element={<ReservationGuide/>} />
      </Routes>
    </div>
  );
}
