import React, {useState,useEffect} from "react";

export default function Room_ImgSlider(){
    const slideImages = [
        'src/assets/images/Room/room_deluxe_1.jpg',
        'src/assets/images/Room/room_deluxe_2.jpg',
        'src/assets/images/Room/room_deluxe_3.jpg',
        'src/assets/images/Room/room_deluxe_4.jpg',
        'src/assets/images/Room/room_deluxe_5.jpg',
    ]

   
        return(
            <div className="img_slide">
                <div className="img_show"></div>
            </div>
        );
   
}