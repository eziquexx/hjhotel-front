import React from "react";
import '../css/RoomInfo.css';
import ButtonEx from "../../../common/ButtonEx";

function RoomDetailButton() {
    return (
        <ButtonEx id="roomDetailButton" url="/roomdetail">
            <p>
                <strong>객실 이름:</strong> 슈페리어룸
            </p>
        </ButtonEx>
    );
}

export default function Room_Info() {
    return (
        <div className="room_info">
            <p><strong>객실 타입:</strong> 스탠다드</p>
            <RoomDetailButton/>
            <p><strong>침대 타입:</strong> 트윈/더블</p>
            <p><strong>전망:</strong> 시티뷰</p>
            <p><strong>투숙 인원:</strong> 2명</p>
            <p><strong>면적:</strong> 26.7m² ~ 30.7m²</p>
        </div>
    );
}
