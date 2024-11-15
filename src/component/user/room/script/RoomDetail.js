import React from "react";
import RoomImgSlider from "./RoomImg";
import RoomInfo from "./RoomInfo";
export default function RoomDetail(){
    return(
 
    <div class="roomDetail_container">
        <header class="header">
            <h1>Standard Superior Room</h1>
            <p>편안한 스탠다드 수페리어 룸에서 휴식을 취해보세요.</p>
        </header>

        {/* <!-- Room Image Section --> */}
        <section class="room-image">
           <RoomImgSlider />
        </section>

        {/* <!-- Room Info Section --> */}
        <section class="room-info">
          <RoomInfo /> 
               </section>

        {/* <!-- Special Services Section --> */}
        <section class="special-services">
            <h2>특별 서비스</h2>
            <ul>
                <li>조식 서비스 제공</li>
                <li>무료 Wi-Fi</li>
                <li>피트니스 센터 이용 가능</li>
                <li>스파 및 웰니스 프로그램 할인</li>
            </ul>
        </section>

        {/* <!-- Amenities Section --> */}
        <section class="amenities">
            <h2>어메니티</h2>
            <ul>
                <li>프리미엄 욕실 어메니티</li>
                <li>커피 및 티 세트</li>
                <li>미니 냉장고</li>
                <li>개인 금고</li>
            </ul>
        </section>

        <section class="amenities">
            <h2>추가 정보</h2>
            <ul>
                <li>모든 요금에 세금 10% 및 봉사료 10%(합계 21%)가 부과됩니다</li>
                <li>
                롯데호텔 서울의 모든 시설은 전부 금연이오니, 이용에 착오 없으시기 바랍니다.</li>
                <li>실 디자인 랜덤 배정</li>
                <li>Re:think' 캠페인의 일환으로 일회용품 사용 줄이기에 동참하고자 칫솔, 치약, 면도기, 쉐이빙 젤은 제공되지 않습니다. ( * 2022년 4월 15일 부 시행)</li>
            </ul>
        </section>

        {/* <!-- Reservation Inquiry Section --> */}
        <section class="reservation-inquiry">
            <h2>예약 문의</h2>
            <p>더 자세한 예약 정보가 필요하시면 아래 연락처로 문의해 주세요.</p>
            <div class="contact">
                <p>전화: <a href="tel:+821234567890">+82-123-4567-890</a></p>
                <p>이메일: <a href="mailto:info@lottehotel.com">info@lottehotel.comㅇㄴㄹㄴ</a></p>
            </div>
        </section>
    </div>


    );
}