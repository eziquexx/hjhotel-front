import { Routes, Route } from "react-router-dom";
import Header from "../component/common/Header";
import AboutContent from "../component/user/about/script/AboutContent";
import RoomContent from "../component/user/room/script/RoomCard";
import SpecialContent from "../component/user/special/script/SpecialContent";
import ReservationContent from "../component/user/reservation/script/ReservationContent";
import CommunityContent from "../component/user/community/script/CommunityContent";
import PaymentContent from "../component/user/payment/script/PaymentContent";
import FullScreenPage from "./FullScreenPage";
import MemberRegister from "../component/user/member/script/MemberRegister";
import MemberTermsPage from "../component/user/member/script/MemberTermsPage";
import RoomCard from "../component/user/room/script/RoomCard";
import RoomList from "../component/user/room/script/RoomList";
import MemberLoginPage from "../component/user/member/script/MemberLoginPage";
import MemberSignUp from "../component/user/member/script/MemberSignUp";
import MemberSignUpComplete from "../component/user/member/script/MemberSignUpComplete";



//24.11.12 지은 [완료] : 사용자 페이지. UserPage를 만들고 그 안에 FullScreenPage 추가.
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

        {/*24.11.13 성준[진행중] 페이지 테스트*/}

        <Route path="/terms" element={<MemberTermsPage />} /> {/*24.11.12 성준[진행중] 약관페이지 테스트*/}
        <Route path="/register" element={<MemberRegister />} /> {/*24.11.12 성준[진행중]  회원가입 정보입력 페이지 테스트*/}
        <Route path="/login" element={<MemberLoginPage />}  /> {/*24.11.12 성준[진행중] 로그인페이지 테스트*/}
        <Route path="/signup" element={<MemberSignUp/>} /> {/*24.11.12 성준[진행중] 회원가입페이지 테스트*/}
        <Route path="/signupcom" element={<MemberSignUpComplete/>} /> {/*24.11.12 성준[진행중] 가입완료 페이지 테스트*/}
        {/*===================================*/}
      </Routes>

    </div>
  );
}
