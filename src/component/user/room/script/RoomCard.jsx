import React from 'react';
import '../css/RoomCard.css';

function RoomCard({ title, subtitle, details, size, imgSrc }) {
    return (
        <div className="room-card">
            <div className="image-slider">
                <img src={imgSrc} alt={title} className="room-image" />
            </div>
            <div className="room-info">
                <h4 className="room-title">{title}</h4>
                <p className="room-subtitle">{subtitle}</p>
                <p className="room-details">{details}</p>
                <p className="room-size">{size}</p>
                <button className="inquiry-button">요금조회</button>
            </div>
        </div>
    );
}

export default RoomCard;
