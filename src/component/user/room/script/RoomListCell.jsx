import RoomImgSlider from "./RoomImgSlider";
import RoomInfo from "./RoomInfo";
import '../css/RoomListCell.css';

export default function RoomListCell(){
    return(
  
   <div className="cell_container">

   <div className="cell_room">
    <p>객실 이름 , 객실 타입</p>
   </div>
        <RoomImgSlider/>
        <RoomInfo />
    </div>
    )
};