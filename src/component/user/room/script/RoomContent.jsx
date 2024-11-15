import React from "react";
import Room_cell from "./RoomListCell";
import '../css/RoomContent.css';
import ControlledCarousel from "./UncontrolledExample";
//roomType,roomName, images,bedType,view,occupancy,area
//24.11.12 지은 [완료] : RoomContent 테스트.
export default function RoomContent() {
  return (
    <div className="room_container">
    
       <h1>객실 페이지</h1>
     <p className="room_top"> 객실안내 </p>
      <Room_cell />
      <Room_cell />

      <ControlledCarousel />
       </div>
  );
}
