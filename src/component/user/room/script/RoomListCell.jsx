import Room_ImgSlider from "./RoomImgSlider";
import Room_Info from "./RoomInfo";
import '../css/RoomListCell.css';

export default function Room_ListCell(){
    return(
  
   <div className="cell_container">

   <div className="cell_room">
    <p>객실 이름 , 객실 타입</p>
   </div>
        <Room_ImgSlider/>
        <Room_Info />
    </div>
    )
};