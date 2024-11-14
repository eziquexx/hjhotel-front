import Room_ImgSlider from "./Room_ImgSlider";
import Room_Info from "./Room_Info";
import '../css/Room_ListCell.css';

export default function Room_ListCell(){
    return(
  
   <div className="cell_container">

   <div className="cell_room">
    <p>객실 이름 , 객실 타입</p>
   </div>
        {/* <Room_ImgSlider/> */}
        <Room_Info />
    </div>
    )
};