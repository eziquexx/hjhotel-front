import React from "react";
import '../css/RoomImgSlider.css';

export default function Room_ImgSlider() {
    const slideImages = [
        '/assets/images/Room/room_deluxe_1.jpg',
        '/assets/images/Room/room_deluxe_2.jpg',
        '/assets/images/Room/room_deluxe_3.jpg',
        '/assets/images/Room/room_deluxe_4.jpg',
        '/assets/images/Room/room_deluxe_5.jpg',
    ];

    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {slideImages.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to={index}
                        className={index === 0 ? "active" : ""}
                        aria-current={index === 0 ? "true" : "false"}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="carousel-inner">
                {slideImages.map((image, index) => (
                    <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                        <img src={image} className="d-block w-100" alt={`Slide ${index + 1}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    );
}
