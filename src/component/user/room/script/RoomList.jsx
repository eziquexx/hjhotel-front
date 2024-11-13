import React from 'react';
import RoomCard from '../script/RoomCard';
import '../css/RoomList.css';

const rooms = [
    {
        title: '슈페리어 룸',
        subtitle: 'MAIN TOWER | 스탠다드',
        details: '침대타입 더블/트윈 | 전망 시티뷰 | 투숙인원 2명',
        size: '객실면적 26.7 m² ~ 30.7 m²',
        imgSrc: 'image1.jpg',
    },
    {
        title: '브레드 이발소 캐릭터 룸',
        subtitle: 'MAIN TOWER | 스탠다드',
        details: '침대타입 더블/트윈 | 전망 시티뷰 | 투숙인원 2명',
        size: '객실면적 40 ~ 46 m²',
        imgSrc: 'image2.jpg',
    },
];

function RoomList() {
    return (
        <div className="room-list">
            {rooms.map((room, index) => (
                <RoomCard key={index} {...room} />
            ))}
        </div>
    );
}

export default RoomList;
