import React from "react";
import Room_cell from "./Room_ListCell";
import '../css/RoomContent.css';
//roomType,roomName, images,bedType,view,occupancy,area
//24.11.12 지은 [완료] : RoomContent 테스트.
export default function RoomContent() {
  return (
    <div className="room_container">
    
       <h1>객실 페이지</h1>
     <p className="room_top"> 객실안내 </p>
      <Room_cell />
      {/* <Room_cell /> */}
      {/* <Room_cell /> */}
      {/* <Room_cell /> */}
      <div>객실 목록, 객실 상세 페이지가 하위 컴포넌트식으로 들어갈 예정.</div>
    </div>
  );
}
